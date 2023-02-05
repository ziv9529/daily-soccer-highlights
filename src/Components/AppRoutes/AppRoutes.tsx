import React from "react"
import { Routes, Route } from "react-router-dom";
import About from "../About/About";
import ErrorPage from "../ErrorPage/ErrorPage";
import Highlights from "../Highlights/Highlights";

export const routingConfiguration = [
    {
        key: "highlights",
        path: "/",
        label: "Highlights",
        element: <Highlights />,
    },
    {
        key: "about",
        path: "/about",
        label: "About",
        element: <About />,
    }
];
export type RouteConfig = typeof routingConfiguration[0];
const AppRoutes = () => {
    return <Routes>
        {routingConfiguration.map((route: RouteConfig) => {
            return (
                <Route
                    key={route.key}
                    element={route.element}
                    path={route.path}
                ></Route>
            )
        })}
        <Route
            key={"error"}
            element={<ErrorPage />}
            path={"*"}
        ></Route>
    </Routes>
}

export default AppRoutes