import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./features/cart/Cart";
import Menu from "./features/menu/Menu";
import Home from "./ui/Home";
import CreateOrder from "/features/order/CreateOrder";
import Order from "/features/order/Order";

const router = createBrowserRouter([

  {
    path:"/",
    element: <Home/>,
  },
  {
    path:"/menu",
    element:<Menu/>,
  },{
    path:'/cart',
    element :<Cart/>
  },
  {
    path:'order/new',
    element : <CreateOrder/>,
  },
  {
    path:'/order/:orderId',
    element:<Order/>,
  }
])

export default function App(){

return (<div>
  <RouterProvider router = {router}/>;
  </div>
)
}