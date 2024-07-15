import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Nested from "../Nested";
import About from "../About";
import Contact from "../Contact";
import Filiali from "../Filiali";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [   {
            path: "/",
            element: <Nested/>,
            children:[
                { 
                    

                }
            ]
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