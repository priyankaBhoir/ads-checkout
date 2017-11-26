import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App.jsx';
require("react-hot-loader/patch")


const render = () => {
  try {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('app')
    )
  } catch (err) {
    console.error(err)
  }
}

if(module.hot) {
	module.hot.accept('./containers/App.jsx', () => {
    render();
  })
}

render();