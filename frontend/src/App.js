import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import HeaderChild from "./components/HeaderChild";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Profile from "./components/Profile";
import CartView from "./components/CartView";
import SearchView from "./components/SearchView";
import Signin from "./components/Signin";
import ProductDetails from "./components/ProductDetails";

const  App=()=> {
  return (
    <div className="App">
      <Header className=""/>
      <HeaderChild  />
      <Outlet/>
    </div>
  );
}
const appRouter=createBrowserRouter(
  [
    {
      path:"/signin",
      element:<Signin/>,
    },
    {
      path:"/",
      element:<App/>,
      children:[
        {
           path:"/",
          element:<Body/>,
        },
        {
          path:"/profile",
          element:<Profile/>,
        },
        {
         path:"/cart",
         element:<CartView/>,
        },
        {
          path:"/search",
          element:<SearchView/>,
         },
        {
          path:"/product/:id",
          element:<ProductDetails/>,
        }
      ]
    }
  ]
)

export default appRouter;
