import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import externalLinks from 'remark-external-links'

const getDirectory = (specificPath) => path.join(process.cwd(), `pages/activities${specificPath}`)
const getFileIDsFromDirectory = (directory) => directory.files.map(fileName => {
  const articleName = fileName.replace(/\.js$/, '')
  const splitPath = directory.path.split('/')
  return {
    params: {
      id: articleName,
      category: splitPath[1],
      costType: splitPath[2]
    }
  }
})

const getFileInfoFromDirectory = targetedDirectory => targetedDirectory.files.map(fileName => {
  const id = fileName.replace(/\.js$/, '')

  const fullPath = path.join(getDirectory(targetedDirectory.path), fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  return {
    id,
    category: targetedDirectory.path,
    ...matterResult.data
  }
})

const getAllDirectories = () => {
  // path declarations
  const aloneAndFreePath = '/alone/free'
  const aloneAndNotFreePath = '/alone/notFree'
  const notAloneAndFreePath = '/notAlone/free'
  const notAloneAndNotFreePath = '/notAlone/notFree'
  const anyoneAndFreePath = '/anyone/free'
  const anyoneAndNotFreePath = '/anyone/notFree'

  // get specific directories
  const aloneAndFree = fs.readdirSync(getDirectory(aloneAndFreePath))
  const aloneAndNotFree = fs.readdirSync(getDirectory(aloneAndNotFreePath))
  const notAloneAndFree = fs.readdirSync(getDirectory(notAloneAndFreePath))
  const notAloneAndNotFree = fs.readdirSync(getDirectory(notAloneAndNotFreePath))
  const anyoneAndFree = fs.readdirSync(getDirectory(anyoneAndFreePath))
  const anyoneAndNotFree = fs.readdirSync(getDirectory(anyoneAndNotFreePath))

  return [
    { path: aloneAndFreePath, files: aloneAndFree },
    { path: aloneAndNotFreePath, files: aloneAndNotFree },
    { path: notAloneAndFreePath, files: notAloneAndFree },
    { path: notAloneAndNotFreePath, files: notAloneAndNotFree },
    { path: anyoneAndFreePath, files: anyoneAndFree },
    { path: anyoneAndNotFreePath, files: anyoneAndNotFree }
  ]
}

export async function getSpecificActivityData (params) {
  const specificDirectory = getDirectory(`/${params.category}/${params.costType}`)
  const fullPath = path.join(specificDirectory, `${params.id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(externalLinks, { target: '_blank', rel: ['nofollow'] })
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    contentHtml,
    id: params.id,
    ...matterResult.data
  }
}

export function getAllActivityIds () {
  const allDirectories = getAllDirectories()
  return allDirectories.reduce((arr, directoryInfo) => {
    const fileIDs = getFileIDsFromDirectory(directoryInfo)
    return [...arr, ...fileIDs]
  }, [])
}

export function getAllActivitiesData () {
  const allDirectories = getAllDirectories()
  const activities = allDirectories.reduce((obj, directory) => {
    const fileInfo = getFileInfoFromDirectory(directory)
    const files = obj[directory.path] || []
    obj[directory.path] = [...files, ...fileInfo]
    return obj
  }, {})
  return activities
}
