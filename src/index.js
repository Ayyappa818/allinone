import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Counter from './features/counter/Counter';
import ProductList from './features/products/ProductList';
import Newproducts from './features/newproducts/Newproducts';
import Todolist from './features/todolist/Todolist';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/cou",
        element:<Counter></Counter>
      },
      {
        path:"/pro",
        element:<ProductList></ProductList>,
      },
      {
        path:"/p",
        element:<Newproducts></Newproducts>,
      },
      {
        path:"/newto",
        element:<Todolist></Todolist>,
      },
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
