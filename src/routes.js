import { h } from 'hyperapp'
import { Route, Switch } from '@hyperapp/router'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { NoMatch } from './pages/NoMatch'
import { Product } from './pages/Product'

export const Routes = () => (
    <Switch>
        <Route path='/' render={Home} />
        <Route path='/product/:id' render={Product} />
        <Route path='/about' render={About} />
        <Route render={NoMatch} />
    </Switch>
)
