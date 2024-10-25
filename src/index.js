import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Board from './features/todolist/Board';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Todolist from './features/todolist/Todolist';
import BMastercard from './features/todolist/BMastercard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Board></Board>,
        children:[
          {
            path:"/",
            element:<BMastercard></BMastercard>
          },
          {
            path:"/todo/:id",
            element:<Todolist></Todolist>
          }
        ]
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
