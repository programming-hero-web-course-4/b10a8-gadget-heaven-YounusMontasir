import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';

import GadgetDetails from './components/GadgetDetails.jsx';
import Statistics from './pages/Statistics.jsx';
import Others from './pages/Others.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/gadgets/:productId",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch('gadgetsData.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('gadgetsData.json')
        
      },
      {
        path: "/others",
        element: <Others></Others>
      },
    ]
  
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
