import { h, app } from 'hyperapp'
import { location } from '@hyperapp/router'

import App from './App'

import Axios from 'axios'

const state = {
    location: location.state,
    movies: [],
    cart: []
}
const actions = {
    location: location.actions,
    movies: {
        fetchMoviesDone: res => res.data,
        fetchMoviesApi: url => (state, actions) => {
            Axios.get(url)
                .then(actions.fetchMoviesDone)
                .catch(err => console.log(err))
        }
    }
}

const view = () => {
    return <App />
}

const main = app(state, actions, view, document.body)

location.subscribe(main.location)
