import Home from "@/pages/home/Home";
import { RoutePath } from "@/shared/config/route-path/route-path";
import { RouteProps } from "react-router";

export const Routes: RouteProps[] = [
    {
        path: RoutePath.HOME.fullPath,
        element: <Home/>
    }
]