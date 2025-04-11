import { Routes as ReactRoutes, Route } from "react-router";
import { Routes } from "./lib/Routes";

export const Routing = () => {
  return (
    <ReactRoutes>
      {Routes.map((item) => (
        <Route key={item.path} path={item.path} element={item.element} />
      ))}
    </ReactRoutes>
  );
};
