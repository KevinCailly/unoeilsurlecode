import { useMarkdown } from './useMarkdown'

const { render } = useMarkdown()

const mdModules = import.meta.glob('@/articles/*.md', { query: '?raw', import: 'default', eager: true })

const allArticles = Object.entries(mdModules).map(([, raw]) => {
  const { data, content } = parseFrontmatter(raw)
  const { contentFR, contentEN } = splitBilingualContent(content)
  
  return {
    id: data.id ?? null,
    slugFR: data.slugFR ?? '',
    slugEN: data.slugEN ?? '',
    titleFR: data.titleFR ?? '',
    titleEN: data.titleEN ?? '',
    excerptFR: data.excerptFR ?? '',
    excerptEN: data.excerptEN ?? '',
    date: data.date ?? null,
    tagsFR: Array.isArray(data.tagsFR) ? data.tagsFR : [],
    tagsEN: Array.isArray(data.tagsEN) ? data.tagsEN : [],
    time: data.time ?? '',
    image: data.image ?? null,
    contentFR: render(contentFR, data.id),
    contentEN: render(contentEN, data.id),
  }
}).sort((a, b) => new Date(b.date) - new Date(a.date))

function parseFrontmatter(raw) {
  const normalized = raw.replace(/\r\n/g, '\n')
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)

  if (!match) return { data: {}, content: normalized }

  const data = {}
  match[1].split('\n').forEach(line => {
    const [key, ...rest] = line.split(':')
    if (!key || !rest.length) return
    let value = rest.join(':').trim()

    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map(v => v.trim())
    }

    data[key.trim()] = value
  })

  return { data, content: match[2].trimStart() }
}

function splitBilingualContent(content) {
  const separator = /<!--\s*lang:en\s*-->/
  const parts = content.split(separator)
  return {
    contentFR: parts[0]?.trim() ?? '',
    contentEN: parts[1]?.trim() ?? parts[0]?.trim() ?? '',
  }
}

export function useArticles() {
  const getAll = () => allArticles || []
  const getByTag = (tag) => allArticles.filter(a => a.tagsFR.includes(tag) || a.tagsFR.includes(tag)) || []
  const getAllExcludeTag = (tag) => allArticles.filter(a => !a.tags.includes(tag)) || []
  const getById = (id) => allArticles.find(a => a.id === id) ?? []

  return { getAll, getByTag, getAllExcludeTag, getById }
}