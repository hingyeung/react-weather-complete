import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import storeFactory from './store'
import ReactWeather from './components/containers/ReactWeather';

const store = storeFactory();
ReactDOM.render(
  <Provider store={store}>
    <ReactWeather/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
