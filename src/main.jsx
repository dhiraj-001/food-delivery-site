import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MaintenanceSection4 from "./componenets/pages/about/About";
import Home from "./componenets/pages/Home";
const Router = createBrowserRouter([
  { path: "/food-delivery-site", element: <Home /> },
  { path: "/food-delivery-site/dishes", element: <MaintenanceSection4 /> },
  { path: "/food-delivery-site/locations", element: <MaintenanceSection4 /> },
  { path: "/food-delivery-site/orders", element: <MaintenanceSection4 /> },
  { path: "/food-delivery-site/signup", element: <MaintenanceSection4 /> },
  { path: "/food-delivery-site/login", element: <MaintenanceSection4 /> },

  // { path: '/contact', element: <Contact /> },
  // Add more routes as needed
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
     <RouterProvider router={Router}></RouterProvider>
  </StrictMode>,
)
