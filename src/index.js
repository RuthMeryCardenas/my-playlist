import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'redux-zero/react';
import registerServiceWorker from './registerServiceWorker';

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
document.getElementById('song-0').classList.add('App-current-song');
