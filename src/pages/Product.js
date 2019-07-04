import { h } from 'hyperapp'
import _ from 'lodash'

export const Product = ({ match }) => (state, actions) => {
    let page_id = match.params.id
    console.log(state.movies)
    return (
        <div oncreate={() => actions.movies.fetchMoviesApi(`http://localhost:8000/movies?id=${page_id}`)}>asdffds</div>
    )
}
