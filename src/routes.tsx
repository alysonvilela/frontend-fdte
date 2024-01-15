import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements, Navigate } from "react-router-dom";

import MapPage from "./pages/Map";
import HomePage from "./pages/Home";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='*'  element={<Navigate to="/" replace />} />
      <Route path="/" element={<HomePage />}/>
      <Route path="/map" element={<MapPage />} />
    </>
  )
);

export const Routes = () => {
  return (
    <RouterProvider router={router} />
  );
};
