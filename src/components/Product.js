import { h } from 'hyperapp'

export const Card = () => {
    return (
        <div class='card'>
            <div class='card-image'>
                <figure class='image is-4by3'>
                    <img src='https://bulma.io/images/placeholders/1280x960.png' alt='Placeholder image' />
                </figure>
            </div>
            <div class='card-content'>
                <p class='title'>
                   商品標題
                </p>
                <p class='subtitle'>分類或是評分</p>
            </div>
            <footer class='card-footer'>
                <p class='card-footer-item'>
                    <span>
                        購買
                    </span>
                </p>
            </footer>
        </div>
    )
}
