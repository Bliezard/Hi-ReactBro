import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";
import About from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import appStore from "./utils/appStore";
import Cart from "./components/cart";
import Footer from "./components/Footer";
// import Grocery from "./components/Grocery";

/* Lazy loading 
 * code splitting
 * chunking
 * Dynamic bundling
 * on demand loading
 */

const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children:[
      {
        path : "/",
        element : <Body />,
        errorElement : <Error />
      },
      { 
        path : "/about",
        element : <About />,
        errorElement : <Error />
      },
      {
        path : "/contact",
        element : <Contact />,
        errorElement : <Error />
     },
     {
      path : "/grocery",
      element :<Suspense fallback = {<h1>Loading...</h1>}>  <Grocery /> </Suspense>,
      errorElement : <Error />
   },
     {
      path : "/restaurants/:resId",
      element : <RestaurantMenu />
     },
     {
      path : "/cart",
      element : <Cart />,
     }
    ],
    errorElement : <Error />
  }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>);

