import { Argv } from 'yargs'

import { createFile } from '../helpers/create-file'

import { createClientFolders } from './initialize_cmd/client/create-client-folders'
import { createClientPackage } from './initialize_cmd/client/create-package'
import { createTSConfig } from './initialize_cmd/client/create-tsconfig'
import { createIndexHTML } from './initialize_cmd/client/create-index-html'
import { createSetupTests } from './initialize_cmd/client/create-setup-tests'
import { createJestConfig } from './initialize_cmd/client/create-jest-config'
import { createIndexRoutes } from './initialize_cmd/client/create-index-routes'
import { createExampleRoutes } from './initialize_cmd/client/create-example-routes'
import { createExampleViews } from './initialize_cmd/client/create-example-view'
import { createLayout } from './initialize_cmd/client/create-layout'
import { createLoadingSpinner } from './initialize_cmd/client/create-loading-spinner'
import { createLoadingSpinnerCSS } from './initialize_cmd/client/create-loading-spinner-css'
import { createClientIndex } from './initialize_cmd/client/create-client-index'
import { createENV } from './initialize_cmd/client/create-env'
import { createGitIgnore } from './initialize_cmd/root/create-gitignore'
import { createExampleOrganism } from './initialize_cmd/client/create-example-organism'
import { createUseGetExample } from './initialize_cmd/client/create-use-get-example'
import { createGetExampleDocument } from './initialize_cmd/client/create-get-example-document'
import { createP } from './initialize_cmd/client/create-p'
import { createPCSS } from './initialize_cmd/client/create-p-css'
import { createErrorCSS } from './initialize_cmd/client/create-error-css'
import { createError } from './initialize_cmd/client/create-error'
import { createCloneWithoutTypename } from './initialize_cmd/client/create-clone-without-typename'
import { createCodegen } from './initialize_cmd/root/create-codegen'
import { createPackage } from './initialize_cmd/root/create-package'
import { createProcfile } from './initialize_cmd/root/create-procfile'

export const command = 'init [name]'
export const describe = 'Initialize a new project [name]'
export const builder = {}
export const handler = (argv: Argv) => {
  // Root
  createFile(`${argv.name}/`, '.gitignore',  createGitIgnore())
  createFile(`${argv.name}/`, 'codegen.yml',  createCodegen())
  createFile(`${argv.name}/`, 'package.json',  createPackage(argv.name))
  createFile(`${argv.name}/`, 'Procfile.dev',  createProcfile())

  // Clientside
  createClientFolders(argv.name)

  // - root
  createFile(`${argv.name}/client/`, 'package.json',  createClientPackage(argv.name))
  createFile(`${argv.name}/client/`, 'tsconfig.json',  createTSConfig())
  createFile(`${argv.name}/client/`, '.env',  createENV())
  createFile(`${argv.name}/client/src/`, 'index.tsx',  createClientIndex())

  // - lib
  createFile(`${argv.name}/client/lib/`, 'clone-without-typename.ts',  createCloneWithoutTypename())

  // - public
  createFile(`${argv.name}/client/src/public/`, 'index.html',  createIndexHTML(argv.name))

  // - support
  createFile(`${argv.name}/client/src/support/`, 'setupTests.ts',  createSetupTests())
  createFile(`${argv.name}/client/src/support/`, 'jest.config.js',  createJestConfig())

  // - routes
  createFile(`${argv.name}/client/src/routes/`, 'index.tsx',  createIndexRoutes())
  createFile(`${argv.name}/client/src/routes/`, 'example.routes.tsx',  createExampleRoutes())

  // - views
  createFile(`${argv.name}/client/src/views/example/`, 'index.view.tsx',  createExampleViews())
  createFile(`${argv.name}/client/src/views/layouts/`, 'application.layout.tsx',  createLayout())

  // - atoms
  createFile(`${argv.name}/client/src/atoms/p/`, 'index.tsx',  createP())
  createFile(`${argv.name}/client/src/atoms/p/`, 'p.module.css',  createPCSS())

  // - molecules
  createFile(`${argv.name}/client/src/molecules/loading/`, 'index.tsx',  createLoadingSpinner())
  createFile(`${argv.name}/client/src/molecules/loading/`, 'loading.module.css',  createLoadingSpinnerCSS())
  createFile(`${argv.name}/client/src/molecules/error/`, 'index.tsx',  createError())
  createFile(`${argv.name}/client/src/molecules/error/`, 'error.module.css',  createErrorCSS())

  // - organisms
  createFile(`${argv.name}/client/src/organisms/example/`, 'index.tsx',  createExampleOrganism())
  createFile(`${argv.name}/client/src/organisms/example/`, 'use-get-example.ts',  createUseGetExample())
  createFile(`${argv.name}/client/src/organisms/example/`, 'get-example.graphql',  createGetExampleDocument())

  // Serverside
  
}
