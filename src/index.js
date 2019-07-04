import { h, app } from 'hyperapp'
import { location } from '@hyperapp/router'
import App from './App'

const state = {
    location: location.state
}
const actions = {
    location: location.actions
}

const view = () => {
    return <App />
}

const main = app(state, actions, view, document.body)

location.subscribe(main.location)