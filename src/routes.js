import { h } from 'hyperapp'
import { Route, Switch } from '@hyperapp/router'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { NoMatch } from './pages/NoMatch'
import { Product } from './pages/Product'

export const Routes = ({ state, actions }) => {
    return (
        <Switch>
            <Route path='/' render={Home({ state: state.home, actions: actions.home })} />
            <Route path='/product/:id' render={Product({ state: state.product, actions: actions.product })} />
            <Route path='/about' render={About} />
            <Route render={NoMatch} />
        </Switch>
    )
}
