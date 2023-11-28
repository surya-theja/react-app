import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import HeaderComponent from "../components/Header";
import BodyComponent from "../components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Error from "../components/Error";
import ResInfo from "../components/ResInfo";

const AppComponent = () => {
    return (
        <div className="app">
            <HeaderComponent/>
            <Outlet/>
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppComponent/>,
        errorElement : <Error/>,
        children : [
            {
                path : "/",
                element : <BodyComponent/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/restaurant/:resId",
                element : <ResInfo/>
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);