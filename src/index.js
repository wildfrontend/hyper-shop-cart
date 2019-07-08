import { h, app } from 'hyperapp'
import { location } from '@hyperapp/router'

import App from './App'

import * as Home from './pages/Home'
import * as Cart from './pages/Cart'
import * as Product from './pages/Product'

const state = {
    location: location.state,
    home: Home.state,
    product: Product.state,
    cart: Cart.state
}
const actions = {
    location: location.actions,
    home: Home.actions,
    product: Product.actions,
    cart: Cart.actions
}

const view = (state, actions) => {
    return <App state={state} actions={actions} />
}

const main = app(state, actions, view, document.body)
location.subscribe(main.location)
