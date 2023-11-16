import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCardProvider } from "../../Context";
import Home from "../home";
import MyAccount from "../myAccount";
import MyOrder from "../myOrder";
import MyOrders from "../myOrdes";
import NotFound from "../notFound";
import SigIn from "../sigIn";
import Navbar from "../../components/NavBar";
import CheckSideMenu from "../../components/CheckSideMenu";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/futnitures", element: <Home /> },
    { path: "/toys", element: <Home /> },
    { path: "/othes", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrders /> },
    { path: "/my-orders/:id", element: <MyOrders /> },
    { path: "/*", element: <NotFound /> },
    { path: "/sig-in", element: <SigIn /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <ShoppingCardProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckSideMenu />
      </BrowserRouter>
    </ShoppingCardProvider>
  );
};

export default App;
