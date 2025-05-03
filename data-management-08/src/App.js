import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  //Authentication
  useEffect(() => {
    //make a api call and send username and password
    const data = {
      name: "Rahul Patil",
    };
    setUserName(data.name);
  }, []);

  return (
    //default value
    <UserContext.Provider value={{ loggedInUser: userName ,setUserName}}>
      {/* Rahul Patil*/}
      <div className="app">
{/* <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}> */}
           {/* Elon Musk*/}
          <Header />
        {/* </UserContext.Provider> */}
        {/*if path = / */}
        {/* <Body /> */}
        {/* if path = /about */}
        {/* <About/> */}
        {/* if path = /contact */}
        {/* <Contact/> */}
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resID",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
