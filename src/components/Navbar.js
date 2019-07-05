import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'

export const NavBar = ({ state, actions }) => {
    let { cart } = state
    return (
        <nav class='navbar' role='navigation' aria-label='main-navigation'>
            <div class='navbar-brand'>
                <a class='navbar-item' href='https://bulma.io'>
                    <img
                        alt='logo'
                        src='https://bulma.io/images/bulma-logo.png'
                    />
                </a>
            </div>
            <div id='navbarBasicExample' class='navbar-menu'>
                <div class='navbar-start'>
                    <Link class='navbar-item' to='/'>
                        Home
                    </Link>

                    <Link class='navbar-item' to='/about'>
                        About
                    </Link>
                </div>
            </div>
            <div class='navbar-end'>
                <div class='navbar-item'>
                    <div class='modal'>
                        <div class='modal-background' />
                        <div class='modal-content'>
                            <pre>{JSON.stringify(cart, null, 2)}</pre>
                        </div>
                        <button class='button'>購物車</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
