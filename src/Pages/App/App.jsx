import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home/index";
import NavBar from "../../Components/NavBar";
import MyAccount from "../MyAccount/index";
import MyOrder from "../MyOrder/index";
import MyOrders from "../MyOrders/index";
import NotFound from "../NotFound/index";
import SignIn from "../SignIn/index";
import "./App.css";
import { ShoppingCardProvider } from "../../Contexts";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";

const AppRourtes = () => {
  // Aquí van las rutas de las diferentes paginas de la app
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/men's clothing", element: <Home /> },
    { path: "/women's clothing", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/jewelery", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-order/last", element: <MyOrder /> },
    { path: `/my-order/:id`, element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <ShoppingCardProvider>
      <BrowserRouter>
        <AppRourtes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCardProvider>
  );
};

export default App;
