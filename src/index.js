import 'babel-polyfill'
import React from 'react'
import { render } from 'react-snapshot'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import LogRocket from 'logrocket'
LogRocket.init('jlpbmj/wp-kyoto')

render(<App />, document.getElementById('root'))
registerServiceWorker()
