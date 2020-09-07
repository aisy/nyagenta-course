import React from 'react';
import { BrowserRouter as Route } from "react-router-dom";

import ScrollTop from './components/commons/ScrollTop';
import RouteApp from './router/index';

function App() {
  return (
    <>
      <Route>
        <ScrollTop />
        <RouteApp />
      </Route>
    </>
  );
}

export default App;
