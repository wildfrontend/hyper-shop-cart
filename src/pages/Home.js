import { h } from 'hyperapp'

import _ from 'lodash'
import * as Product from '../components/Product'
import { Filter } from '../components/Filter'
import Axios from 'axios'

export const state = {
    movies: []
}

export const actions = {
    setMovies: value => state => ({ movies: value }),
    fetchMoviesApi: () => (state, actions) => {
        console.log(state, actions)
        Axios.get('http://localhost:8000/movies')
            .then(res => {
                console.log(res)
                actions.setMovies(res.data)
            })
            .catch(err => console.log(err))
    }
}

export const Home = ({ state, actions }) => props => {
    console.log(state, actions, props)

    let { movies } = state
    let { fetchMoviesApi } = actions

    if (_.isEmpty(movies)) fetchMoviesApi()

    return (
        <div>
            <section class='hero is-medium is-dark is-bold'>
                <div class='hero-body'>
                    <div class='container'>
                        <h1 class='title'>HyperApp 練習用購物網站</h1>
                        <h2 class='subtitle'>電影購物車</h2>
                    </div>
                </div>
            </section>
            <div class='container' style={{ marginTop: '4rem' }}>
                <div class='columns is-multiline'>
                    {_.map(movies, movie => {
                        return (
                            <div class='column is-3'>
                                <Product.Card movie={movie} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
