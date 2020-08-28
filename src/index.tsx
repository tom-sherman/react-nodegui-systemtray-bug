import { Renderer } from '@nodegui/react-nodegui';
import React from 'react';
import App from './App';

process.title = 'My NodeGui App';
Renderer.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// This is for hot reloading (this will be stripped off in production by webpack)
if (module.hot) {
  module.hot.accept(['./App'], function () {
    Renderer.forceUpdate();
  });
}
