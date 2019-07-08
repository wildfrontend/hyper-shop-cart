import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'

export const Card = ({ movie, actionsCart }) => {
    let {
        id,
        overview,
        planet_shipping,
        poster_path,
        price,
        release_date,
        title,
        vote_average
    } = movie
    let { addToCart } = actionsCart
    return (
        <div id={id} class='card'>
            <div class='card-image'>
                <span
                    class='badge is-badge-warning is-badge-large'
                    data-badge={vote_average}
                />
                <figure class='image is-4by3'>
                    <Link to={`/product/${id}`}>
                        <img
                            class='image is-2x3'
                            src={`http://${poster_path}`}
                            alt={title}
                        />
                    </Link>
                </figure>
            </div>
            <div class='card-content'>
                <b>{title}</b>
            </div>
            <footer class='card-footer'>
                <p
                    class='card-footer-item button'
                    onclick={() => addToCart({ id, title, price, poster_path })}
                >
                    <span>購買</span>
                </p>
            </footer>
        </div>
    )
}
