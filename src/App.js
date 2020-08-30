import React from 'react';
import { BrowserRouter as Route } from "react-router-dom";

import RouteApp from './router/index';

function App() {
  return (
    <>
      <Route>
        <RouteApp />
      </Route>
    </>
  );
}

export default App;
