import titleize from '../../../helpers/titleize'

export const createRoutes = (name: string) => {
  return (`import React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

import ApplicationLayout from 'views/layouts/application.layout'
import Show${titleize(name)}View from 'views/${name}/show'
import Index${titleize(name)}View from 'views/${name}/index'
import New${titleize(name)}View from 'views/${name}/new'
import Edit${titleize(name)}View from 'views/${name}/edit'

const ${titleize(name)}Routes<RouteComponentProps>: React.FC = () => {
  return (
    <Route path='${name}/new' component={New${titleize(name)}View} />
    <Route path='${name}/edit' component={Edit${titleize(name)}View} />
    <Route path='${name}/:id' component={Show${titleize(name)}View} />
    <Route path='${name}' component={Index${titleize(name)}View} />
  )
}

export default ${titleize(name)}Routes`
  )
}