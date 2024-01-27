import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Catalog from 'pages/Catalog';

const MyRoutes = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/"element={<Home />} />
      <Route path="/products" element={<Catalog />} />
    </Routes>
  </BrowserRouter>
);

export default MyRoutes;
