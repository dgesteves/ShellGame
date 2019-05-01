import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import ShellGame from './components/shellGame/ShellGame';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={ createStore(reducers) }>
        <ShellGame/>
    </Provider>,
    document.getElementById('root'));
