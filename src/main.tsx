import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import {Contact} from "./pages/Contact.tsx";
import {About} from "./pages/About.tsx";
import {Events} from "./pages/Events.tsx";
import {Projects} from "./pages/Projects.tsx";
import {Error404} from "./pages/Error404.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <Error404 />
    },
    {
        path: "/events",
        element: <Events />,
        errorElement: <Error404 />
    },
    {
        path: "/projects",
        element: <Projects />,
        errorElement: <Error404 />
    },
    {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error404 />
    },
    {
        path: "*",
        element: <Error404 />
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={ router }/>
    </React.StrictMode>,
)
