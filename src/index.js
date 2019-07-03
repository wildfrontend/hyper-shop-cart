import { h, app } from 'hyperapp'

import App from './App'

import { state } from './store/state'
import { actions } from './store/actions'

app(state, actions, () => <App />, document.body)
