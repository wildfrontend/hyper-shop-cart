import { h } from 'hyperapp'
import { Route, Switch } from '@hyperapp/router'

import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { NoMatch } from './pages/NoMatch'
import { Product } from './pages/Product'

export const Routes = ({ state, actions }) => {
    return (
        <Switch>
            <Route
                path='/'
                render={Home({
                    state: { home: state.home, cart: state.cart },
                    actions: { home: actions.home, cart: actions.cart }
                })}
            />
            <Route
                path='/cart'
                render={Cart({
                    state: state.cart,
                    actions: actions.cart
                })}
            />
            <Route
                path='/product/:id'
                render={Product({
                    state: state.product,
                    actions: actions.product
                })}
            />

            <Route render={NoMatch} />
        </Switch>
    )
}
