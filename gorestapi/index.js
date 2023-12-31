import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import Users from './NewUsers';
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom';
import Posts from './NewPosts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/users",
    element: <Users />
  },
  {
    path: "/posts",
    element: <Posts />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
