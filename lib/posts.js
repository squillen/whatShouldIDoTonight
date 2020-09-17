import fs from 'fs'
import path from 'path'

const getDirectory = (specificPath) => path.join(process.cwd(), `pages/activities${specificPath}`)

const getFileInfoFromDirectory = targetedDirectory => targetedDirectory.files.map(fileName => {
  const id = fileName.replace(/\.js$/, '')

  return {
    id,
    category: targetedDirectory.path
  }
})

const getAllDirectories = () => {
  // path declarations
  // alone
  const aloneFreeAndInsidePath = '/alone/free/inside'
  const aloneFreeAndOutsidePath = '/alone/free/outside'
  const aloneNotFreeAndInsidePath = '/alone/notFree/inside'
  const aloneNotFreeAndOutsidePath = '/alone/notFree/outside'

  // not alone
  const notAloneFreeAndInsidePath = '/notAlone/free/inside'
  const notAloneFreeAndOutsidePath = '/notAlone/free/outside'
  const notAloneNotFreeAndInsidePath = '/notAlone/notFree/inside'
  const notAloneNotFreeAndOutsidePath = '/notAlone/notFree/outside'

  // anyone
  const anyoneFreeAndInsidePath = '/anyone/free/inside'
  const anyoneFreeAndOutsidePath = '/anyone/free/outside'
  const anyoneNotFreeAndInsidePath = '/anyone/notFree/inside'
  const anyoneNotFreeAndOutsidePath = '/anyone/notFree/outside'

  // get specific directories
  // alone
  const aloneFreeAndInside = fs.readdirSync(getDirectory(aloneFreeAndInsidePath))
  const aloneFreeAndOutside = fs.readdirSync(getDirectory(aloneFreeAndOutsidePath))
  const aloneNotFreeAndInside = fs.readdirSync(getDirectory(aloneNotFreeAndInsidePath))
  const aloneNotFreeAndOutside = fs.readdirSync(getDirectory(aloneNotFreeAndOutsidePath))

  // not alone
  const notAloneFreeAndInside = fs.readdirSync(getDirectory(notAloneFreeAndInsidePath))
  const notAloneFreeAndOutside = fs.readdirSync(getDirectory(notAloneFreeAndOutsidePath))
  const notAloneNotFreeAndInside = fs.readdirSync(getDirectory(notAloneNotFreeAndInsidePath))
  const notAloneNotFreeAndOutside = fs.readdirSync(getDirectory(notAloneNotFreeAndOutsidePath))

  // anyone
  const anyoneFreeAndInside = fs.readdirSync(getDirectory(anyoneFreeAndInsidePath))
  const anyoneFreeAndOutside = fs.readdirSync(getDirectory(anyoneFreeAndOutsidePath))
  const anyoneNotFreeAndInside = fs.readdirSync(getDirectory(anyoneNotFreeAndInsidePath))
  const anyoneNotFreeAndOutside = fs.readdirSync(getDirectory(anyoneNotFreeAndOutsidePath))

  return [
    // alone
    { path: aloneFreeAndInsidePath, files: aloneFreeAndInside },
    { path: aloneFreeAndOutsidePath, files: aloneFreeAndOutside },
    { path: aloneNotFreeAndInsidePath, files: aloneNotFreeAndInside },
    { path: aloneNotFreeAndOutsidePath, files: aloneNotFreeAndOutside },
    // not alone
    { path: notAloneFreeAndInsidePath, files: notAloneFreeAndInside },
    { path: notAloneFreeAndOutsidePath, files: notAloneFreeAndOutside },
    { path: notAloneNotFreeAndInsidePath, files: notAloneNotFreeAndInside },
    { path: notAloneNotFreeAndOutsidePath, files: notAloneNotFreeAndOutside },
    // anyone
    { path: anyoneFreeAndInsidePath, files: anyoneFreeAndInside },
    { path: anyoneFreeAndOutsidePath, files: anyoneFreeAndOutside },
    { path: anyoneNotFreeAndInsidePath, files: anyoneNotFreeAndInside },
    { path: anyoneNotFreeAndOutsidePath, files: anyoneNotFreeAndOutside }
  ]
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
