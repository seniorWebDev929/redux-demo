import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import { Provider } from 'react-redux';
import store from './redux/store';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store = {store}>
        <TodoApp />
    </Provider>,
    rootElement
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

