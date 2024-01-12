import { Route, BrowserRouter } from "react-router-dom";

import MapPage from "./pages/Map";

export const Routes = () => {
  return (
    <BrowserRouter>
        <Route Component={MapPage} path="/map" />
    </BrowserRouter>
  );
};
