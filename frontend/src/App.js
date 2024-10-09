import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import HeaderChild from "./components/HeaderChild";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Profile from "./components/Profile";
import CartView from "./components/CartView";
import SearchView from "./components/SearchView";

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
         }
      ]
    }
  ]
)

export default appRouter;
