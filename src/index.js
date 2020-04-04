import React from 'react';
import ReactDOM from 'react-dom';
import App from './compoents/app';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from './epics'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { faFrown, faSpinner, faCoffee } from '@fortawesome/free-solid-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faFrown, faSpinner, faCoffee)

const epicMiddleware = createEpicMiddleware()

const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(epicMiddleware)
    )
)
epicMiddleware.run(rootEpic)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))
