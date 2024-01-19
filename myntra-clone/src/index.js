import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import Bag from "./routes/Bag";
import Home from "./routes/Home";
import { Provider } from "react-redux"
import myntraStore from './store';
import "bootstrap/dist/css/bootstrap.min.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", element: <Home />,
        // loader:postLoader
      },
      {
        path: "/bag",
        element: <Bag />
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
