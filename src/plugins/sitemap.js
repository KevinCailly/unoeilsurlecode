import { readFileSync, readdirSync, writeFileSync } from 'fs'
import { resolve } from 'path'

function parseFrontmatter(raw) {
    const normalized = raw.replace(/\r\n/g, '\n')
    const match = normalized.match(/^---\n([\s\S]*?)\n---/)
    if (!match) return {}

    const data = {}
    match[1].split('\n').forEach(line => {
        const [key, ...rest] = line.split(':')
        if (!key || !rest.length) return
        data[key.trim()] = rest.join(':').trim()
    })
    return data
}

export default function sitemapPlugin() {
    return {
        name: 'generate-sitemap',
        closeBundle() {
            const articlesDir = resolve('./src/articles')
            const baseUrl = 'https://unoeilsurlecode.fr'

            const staticUrls = [
                { loc: `${baseUrl}/`,              priority: '1.0', changefreq: 'monthly' },
                { loc: `${baseUrl}/fr/articles`,   priority: '0.8', changefreq: 'weekly'  },
                { loc: `${baseUrl}/en/articles`,   priority: '0.8', changefreq: 'weekly'  },
                { loc: `${baseUrl}/fr/mentions`,   priority: '0.3', changefreq: 'yearly'  },
                { loc: `${baseUrl}/en/mentions`,   priority: '0.3', changefreq: 'yearly'  },
            ]

            const articleUrls = []
            try {
                const files = readdirSync(articlesDir).filter(f => f.endsWith('.md'))

                files.forEach(file => {
                    const raw = readFileSync(resolve(articlesDir, file), 'utf-8')
                    const data = parseFrontmatter(raw)

                    if (!data.id || !data.slugFR || !data.slugEN) return

                    articleUrls.push({
                        loc: `${baseUrl}/fr/article/${data.id}/${data.slugFR}`,
                        priority: '0.6',
                        changefreq: 'monthly',
                        lastmod: data.date || null,
                    })
                    articleUrls.push({
                        loc: `${baseUrl}/en/article/${data.id}/${data.slugEN}`,
                        priority: '0.6',
                        changefreq: 'monthly',
                        lastmod: data.date || null,
                    })
                })
            } catch (e) {
                console.warn('Sitemap : dossier articles introuvable', e)
            }

            const allUrls = [...staticUrls, ...articleUrls]
            const urlToXml = (url) => {
            const lines = ['  <url>']
                lines.push(`    <loc>${url.loc}</loc>`)
                if (url.lastmod) lines.push(`    <lastmod>${url.lastmod}</lastmod>`)
                lines.push(`    <changefreq>${url.changefreq}</changefreq>`)
                lines.push(`    <priority>${url.priority}</priority>`)
                lines.push('  </url>')
                return lines.join('\n')
            }

            const xml = [
                '<?xml version="1.0" encoding="UTF-8"?>',
                '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
                ...allUrls.map(urlToXml),
                '</urlset>'
            ].join('\n')

            writeFileSync(resolve('./dist/sitemap.xml'), xml)
        }
    }
}