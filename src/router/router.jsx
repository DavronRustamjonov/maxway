import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Nested from "../Nested";
import About from "../About";
import Contact from "../Contact";
import Filiali from "../Filiali";
/*          Menu                  */
import Lavash from "../Lavash";
import Desert from "../Desert";
import Set from "../Set";
import Haggi from "../Haggi";
import Burger from "../Burger";
import Pizza from "../Pizza";
import Sendvich from "../Sendvich";
import XotDog from "../XotDog";
import Drink from "../Drink";
import Salad from "../Salad";
import Bread from "../Bread";
import Souce from "../Souce";
import Donar from "../Donar";
import Free from "../Free";
import FilialCard from "../FilialCard";
/*          Menu End             */

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [   {
            path: "/",
            element: <Nested/>,
            children:[
                {
                    path :"/",
                    element:<Lavash/>
                },
                {
                    path :"/desert",
                    element:<Desert/>
                },
                {
                    path :"/set",
                    element:<Set/>
                },
                {
                    path :"/haggi",
                    element:<Haggi/>
                },
                {
                    path :"/burger",
                    element :<Burger/>
                },
                {
                    path :"/pizza",
                    element :<Pizza/>
                },
                {
                    path :"/sendvich",
                    element :<Sendvich/>
                },
                {
                    path :"/donar",
                    element :<Donar/>
                },
                {
                    path :"/xotdog",
                    element :<XotDog/>
                },
                {
                    path :"/free",
                    element :<Free/>
                },
                {
                    path :"/drink",
                    element :<Drink/>
                },
                {
                    path :"/salad",
                    element :<Salad/>
                },
                {
                    path :"/bread",
                    element :<Bread/>
                },
                {
                    path :"/souce",
                    element :<Souce/>
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

        },
        {
            path:"/filial-card",
            element :<FilialCard/>
        }

        ]

    }
 

])
export default router