import React from 'react';
import ReactDOM from 'react-dom';
import App from './compoents/app';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {createEpicMiddleware} from 'redux-observable'
import {rootEpic} from './epics'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const epicMiddleware = createEpicMiddleware(rootEpic)

const store = createStore(reducer,
    composeWithDevTools( 
        applyMiddleware(epicMiddleware)
    )
)
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'))
