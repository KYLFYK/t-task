import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Application } from './Application';
import { Provider } from 'react-redux';
import { store } from './ducks';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </StrictMode>
);
