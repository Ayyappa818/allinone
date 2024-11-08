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
import { Provider } from 'react-redux';
import { store } from './app/store';
import Login from './features/User/Login';
import Signup from './features/User/Signup';
import Home from './Home'
import DashBoard from './DashBoard';
import LeadMaster from './features/leads/LeadMaster';
import AddLeads from './features/leads/AddLeads';
import AboutLead from './features/leads/AboutLead';
import AddRemarks from './features/leads/AddRemarks';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/signup",
        element:<Signup></Signup>,
      },
      {
        path: "/dashboard",
        element:<DashBoard></DashBoard>,
        children:[
          {
            path:"/dashboard/",
            element:<LeadMaster></LeadMaster>
          },
          {
            path:"/dashboard/addlead",
            element:<AddLeads></AddLeads>
          },
          {
            path:"/dashboard/aboutlead/:id",
            element:<AboutLead></AboutLead>
          },
          {
            path:"/dashboard/addremark/:id",
            element:<AddRemarks></AddRemarks>
          }
        ]
      },
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
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
