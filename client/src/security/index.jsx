import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";



const Routes = () => {
    const { token } = useAuth()

    const routesForPublic = [{

        path: "/service",
        element: <div>Service page</div>



    }, {

        path: "/about-us",
        element: <div>About us</div>



    }]

    const routesForAuthenticatedOnly = [

        {

            path: "/",
            element: <ProtectedRoute />,
            children: [

                {
                    path: "/",
                    element: <div> user home</div>
                },
                {
                    path: "/profile",
                    element: <div> User Profile</div>
                },
                {
                    path: "/logout",
                    element: <div> Logout </div>
                }
            ]




        }




    ]

    const routesForNotAuthenticatedOnly = [

        {

            path: "/",
            element: <div></div>

        },

        {
            path: "/login",
            element: <div></div>


        }


    ]


  const router = createBrowserRouter([

      ...routesForPublic,
      ...(!token ?routesForNotAuthenticatedOnly : [] ),
      ...routesForAuthenticatedOnly

  ])

 return <RouterProvider router={router}/>

}

export default Routes