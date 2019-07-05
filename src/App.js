import { h } from 'hyperapp'

import { NavBar } from './components/NavBar'

import './styles/app.scss'
import { Routes } from './routes'

const App = ({ state, actions }) => {
    return (
        <div>
            <header>
                <NavBar state={state} actions={actions} />
            </header>
            <main>
                <Routes state={state} actions={actions} />
            </main>
        </div>
    )
}
export default App
