import { h } from 'hyperapp'
import { Route, Switch } from '@hyperapp/router'

import { Home } from './pages/Home'
import { NoMatch } from './pages/NoMatch'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'

import './styles/app.scss'

const App = () => (
  <div>
    <header>
      <Navbar />
    </header>
    <Switch>
      <Route path='/' render={Home} />
      <Route path='/about' render={About} />
      <Route parent render={NoMatch} />
    </Switch>
  </div>
)

export default App
