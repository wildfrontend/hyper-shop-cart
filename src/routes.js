import { h } from 'hyperapp'
import { Route, Switch } from '@hyperapp/router'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { NoMatch } from './pages/NoMatch'

export const Routes = () => (
    <Switch>
      <Route path='/' render={Home} />
      <Route path='/about' render={About} />
      <Route render={NoMatch} />
    </Switch>
)
