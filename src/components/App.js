import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { AppLayout } from "./AppLayout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CalculatorPage = lazy(() =>
  import('./pages/CalculatorPage/CalculatorPage')
);



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="calculator" element={<CalculatorPage />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
