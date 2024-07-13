import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Filiali from "../Filiali";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [   {
            path: "/home",
            element: <Home/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/contact",
            element: <Contact/>,
            
        },
        {
            path: "/filiali",
            element: <Filiali/>,

        }
        ]

    }
 

])
export default router