import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../screens/Home';
import JavascriptLearn from '../screens/javascript/Learn';
import JavascriptQuestions from '../screens/javascript/Questions'
import ReactLearn from "../screens/react/Learn"
import ReactQuestions from "../screens/react/Questions"
import Form from '../screens/javascript/Form';

function Routes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'learn/javascript', element: <JavascriptLearn /> },
    { path: 'questions/javascript', element: <JavascriptQuestions /> },
    { path: '/form', element: <Form /> },
    { path: 'learn/react', element: <ReactLearn /> },
    { path: 'questions/react', element: <ReactQuestions /> },
  ]);

  return routes;
}

export default Routes;