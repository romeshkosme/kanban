import React from "react";
import "./style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Project from "./pages/Project";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

function App () {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    path: "dashboard",
                    element: <Dashboard />,
                    index: true
                },
                {
                    path: "project/:projectId",
                    element: <Project />
                },
                {
                    path: "settings",
                    element: <Settings />
                }
            ]
        }
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App;