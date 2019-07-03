import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'

export const Navbar = () => {
  return (
    <nav class='navbar' role='navigation' aria-label='main navigation'>
      <div class='navbar-brand'>
        <a class='navbar-item' href='https://bulma.io'>
          <img alt='logo' src='https://bulma.io/images/bulma-logo.png' />
        </a>

        <a
          role='button'
          class='navbar-burger burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
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

        <div class='navbar-end'>
          <div class='navbar-item'>
            <a class='button is-primary'>
              <strong>Sign up</strong>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
