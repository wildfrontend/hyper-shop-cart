import { h } from 'hyperapp'

import { NavBar } from './components/NavBar'

import './styles/app.scss'
import { Routes } from './routes'

const App = () => (
    <div>
        <header>
            <NavBar />
        </header>
        <main>
            <Routes />
        </main>
    </div>
)

export default App