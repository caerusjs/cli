import { Argv } from 'yargs'

import { createFile } from '../../helpers/create-file'

import { createRoutes } from './routes/create-routes'
import { createView } from './views/create-view'

export const command = 'views [name]'
export const describe = 'Generate views named [name]'
export const builder = {}
export const handler = (argv: Argv) => {
  createViews(argv.name)
}

export const createViews = (name: string) => {
  createFile(`${process.cwd()}/client/src/routes/`, `${name}.tsx`,  createRoutes(name))
  createFile(`${process.cwd()}/client/src/views/${name}/`, `new.tsx`,  createView(name, 'New'))
  createFile(`${process.cwd()}/client/src/views/${name}/`, `edit.tsx`,  createView(name, 'Edit'))
  createFile(`${process.cwd()}/client/src/views/${name}/`, `show.tsx`,  createView(name, 'Show'))
  createFile(`${process.cwd()}/client/src/views/${name}/`, `index.tsx`,  createView(name, 'Index'))
}