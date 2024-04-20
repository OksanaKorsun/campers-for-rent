import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { AppWrapper } from './App.styled';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));

const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
};
export default App;
