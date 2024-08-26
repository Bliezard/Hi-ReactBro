import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";
import About from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider } from "react-router-dom";



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children:[
      {
        path : "/about",
        element : <About />,
        errorElement : <Error />
      },
      {
        path : "/Contact",
        element : <Contact />,
        errorElement : <Error />
    
      },
    ],
    errorElement : <Error />
  },
  {
    path : "/about",
    element : <About />,
    errorElement : <Error />
  },
  {
    path : "/Contact",
    element : <Contact />,
    errorElement : <Error />

  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>);

