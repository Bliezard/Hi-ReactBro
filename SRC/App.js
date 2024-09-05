import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";
import About from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
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
    <div className="app">
      <Header />
      <Outlet />
    </div>
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
     }
    ],
    errorElement : <Error />
  }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>);

