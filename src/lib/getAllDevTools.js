import glob from 'fast-glob'
import * as path from 'path'

async function importDevTool(devToolFilename) {
  let { meta, default: component } = await import(
    `../pages/dev-tools/${devToolFilename}`
  )
  return {
    slug: devToolFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllDevTools() {
  let devToolFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/dev-tools'),
  })

  let devTools = await Promise.all(devToolFilenames.map(importDevTool))

  return devTools.sort((a, z) => new Date(z.date) - new Date(a.date))
}
