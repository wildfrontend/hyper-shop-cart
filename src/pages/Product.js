import { h } from 'hyperapp'
import _ from 'lodash'

export const Product = ({ match }) => (state, actions) => {
    let detail = state.movies.filter(movie => movie.id == match.params.id)

    return (
        <div>
            {detail.map(({ id, title, overview, poster_path, vote_average, release_date, price }) => {
                return (
                    <div>
                        <div class='modal is-active'>
                            <div class='modal-background' />
                            <div class='modal-card'>
                                <header class='modal-card-head'>
                                    <p class='modal-card-title'>{title} </p>

                                    <button
                                        class='delete'
                                        aria-label='close'
                                        onclick={() => {
                                            window.history.back()
                                        }}
                                    />
                                </header>
                                <section class='modal-card-body'>
                                    <div class='columns'>
                                        <div class='column'>
                                            <figure class='media-left'>
                                                <img src={`http://${poster_path}`} />
                                            </figure>
                                        </div>

                                        <div class='column'>
                                            <p>{overview}</p>
                                            <p class='title is-5'> Plot: </p>
                                            <p class='title is-6'> {123} </p>

                                            <p class='title is-6'>Release date {release_date} </p>
                                            <span class='tag is-warning'>{vote_average}</span>
                                        </div>
                                    </div>
                                </section>
                                <footer class='modal-card-foot'>
                                    <a class='button is-success'>
                                        <b> Add to Cart ${price} </b>
                                    </a>
                                    <b> {2} Items in cart</b>
                                </footer>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
