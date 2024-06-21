import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../screens/Home';
import Learn from '../screens/Learn';
import Questions from '../screens/Questions'

function Routes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'learn/javascript', element: <Learn /> },
    { path: 'questions/javascript', element: <Questions /> },
  ]);

  return routes;
}

export default Routes;