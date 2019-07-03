import { h } from 'hyperapp'
import { Route, Switch } from '@hyperapp/router'
import { Home } from './pages/Home'
import { NoMatch } from './pages/NoMatch'
import { About } from './pages/About'

const App = () => (
  <Switch>
    <Route path='/' render={Home} />
    <Route path='/about' render={About} />
    <Route render={NoMatch} />
  </Switch>
)

export default App
