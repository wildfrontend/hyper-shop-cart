import { h, app } from 'hyperapp'
import { location } from '@hyperapp/router'
import { data } from './data/movies'
import App from './App'

const state = {
    location: location.state,
    movies: data
}
const actions = {
    location: location.actions
}

const view = () => {
    return <App />
}

const main = app(state, actions, view, document.body)

location.subscribe(main.location)
