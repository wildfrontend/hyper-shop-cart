import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'

export const Card = ({ movie }) => {
    let { id, overview, planet_shipping, poster_path, price, release_date, title, vote_average } = movie
    return (
        <div id={id} class='card'>
            <div class='card-image'>
                <span class='badge is-badge-warning is-badge-large' data-badge={vote_average} />
                <figure class='image is-4by3'>
                    <Link to={`/product/${id}`}>
                        <img src={`http://${poster_path}`} alt={title} />
                    </Link>
                </figure>
            </div>
            <div class='card-content'>
                <b>{title}</b>
            </div>
            <footer class='card-footer'>
                <p class='card-footer-item'>
                    <span>購買</span>
                </p>
            </footer>
        </div>
    )
}
