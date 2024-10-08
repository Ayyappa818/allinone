import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home';
import Features from './components/Features';
import Country from './components/Country';
import CountryDetails from './components/CountryDetails';
import Details from './components/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/features",
        element: <Features></Features>,
      },
      {
        path: "/country",
        element: <Country></Country>,
      },
      {
        path: "/det",
        element: <Details></Details>,
      },
      {
        path: "/country/countrydetails/:cname",
        element:<CountryDetails></CountryDetails>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
