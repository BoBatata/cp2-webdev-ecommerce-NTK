import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Layout from "../Layout"
import Perfil from "../pages/Perfil"
import Cart from "../pages/Cart"

const router = createBrowserRouter([
    {
     path: "/",
     element: <Layout/>,
     children: [
        {index: true, element: <Home/>},
        {path:"perfil", element: <Perfil/>},
        {path:"carrinho", element: <Cart/>}
     ]
    }
])

export default router