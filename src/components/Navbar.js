import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'

export const NavBar = () => {
    return (
        <nav class='navbar' role='navigation' aria-label='main-navigation'>
            <div class='navbar-brand'>
                <a class='navbar-item' href='https://bulma.io'>
                    <img alt='logo' src='https://bulma.io/images/bulma-logo.png' />
                </a>
            </div>
            <div id='navbarBasicExample' class='navbar-menu'>
                <div class='navbar-start'>
                    <Link class='navbar-item' to='/'>
                        Home
                    </Link>

                    <Link class='navbar-item' to='/about'>
                        Documentation
                    </Link>
                </div>
            </div>
        </nav>
    )
}
