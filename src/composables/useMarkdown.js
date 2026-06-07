import MarkdownIt from 'markdown-it'

function renderCustomBlock(type, param, inner) {
  switch (type) {
    case 'animation':
      return `<div class="anim-block" data-anim="${param}">${inner}</div>`
    case 'highlight':
      return `<div class="highlight-block highlight-${param}">${inner}</div>`
    case 'columns': {
      const cols = inner
        .split('<hr>')
        .map(c => `<div class="col">${c}</div>`)
        .join('')
      return `<div class="columns-block">${cols}</div>`
    }
    default:
      return inner
  }
}

function customBlockPlugin(md) {
  md.block.ruler.before('fence', 'custom_block', (state, startLine, endLine, silent) => {
    const pos = state.bMarks[startLine] + state.tShift[startLine]
    const max = state.eMarks[startLine]
    const line = state.src.slice(pos, max)

    if (!line.startsWith(':::')) return false
    if (silent) return true

    const parts = line.slice(3).trim().split(' ')
    const type  = parts[0]
    const param = parts.slice(1).join(' ')

    let nextLine = startLine + 1
    let content  = ''

    while (nextLine < endLine) {
      const lineText = state.src.slice(
        state.bMarks[nextLine] + state.tShift[nextLine],
        state.eMarks[nextLine]
      )
      if (lineText.trim() === ':::') break
      content += lineText + '\n'
      nextLine++
    }

    const token = state.push('custom_block', '', 0)
    token.info = type
    token.content = content
    token.attrSet('data-param', param)
    state.line = nextLine + 1
    return true
  })

  md.renderer.rules.custom_block = (tokens, idx) => {
    const token = tokens[idx]
    const type = token.info
    const param = token.attrGet('data-param') || ''
    const inner = md.render(token.content)
    return renderCustomBlock(type, param, inner)
  }
}

function injectImages(content, articleId) {
  return content.replace(
    /<!--\s*IMAGE:(\w+)\s*-->/g,
    (_, name) => {
      const src = `/images/articles/${articleId}/${name}.webp`
      return `<div class="relative z-30">
        <img src="${src}" alt="${name}" class="rounded-lg shadow-md my-6 mx-auto max-h-96 object-contain" />
      </div>`
    }
  )
}

const md = new MarkdownIt({ html: true })
md.use(customBlockPlugin)

export function useMarkdown() {
  const render = (content, articleId = null) => {
    let processed = content || ''
    if (articleId) {
      processed = injectImages(processed, articleId)
    }
    return md.render(processed)
  }
  return { render }
}