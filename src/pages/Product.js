import { h } from 'hyperapp'
import _ from 'lodash'
import * as R from 'ramda'
import Axios from 'axios'

export const state = {
    movieByID: {}
}

export const actions = {
    setMovieByID: value => () => ({ movieByID: value }),

    fetchMovieByID: id => (state, actions) => {
        return Axios.get(`http://localhost:8000/movies`, {
            params: {
                id
            }
        }).then(res => {
            let dataToJson = R.mergeAll(res.data)
            return actions.setMovieByID(dataToJson)
        })
    }
}

export const Product = ({ state, actions }) => props => {
    let page_id = props.match.params.id
    let { movieByID } = state
    let { fetchMovieByID } = actions

    let {
        id,
        vote_average,
        title,
        poster_path,
        overview,
        release_date,
        planet_shipping,
        price
    } = movieByID

    if (id!==page_id) fetchMovieByID(page_id)

    return (
        <div class='container'>
            <div class='tile is-ancestor'>
                <div class='tile is-4 is-vertical is-parent'>
                    <div class='tile is-child box'>
                        <img
                            class='image is-300x450px'
                            src={`http://${poster_path}`}
                        />
                    </div>
                    <div class='tile is-child box'>
                        <p class='title'>購物</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin ornare magna eros, eu pellentesque
                            tortor vestibulum ut. Maecenas non massa sem. Etiam
                            finibus odio quis feugiat facilisis.
                        </p>
                    </div>
                </div>
                <div class='tile is-parent'>
                    <div class='tile is-child box'>
                        <p class='title'>{title}</p>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
