import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import PageNotFound from "./pages/PageNotFound"; */

const Layout = lazy(()=> import('./pages/Layout'));
const Home = lazy(()=> import('./pages/Home'));
const About = lazy(()=> import('./pages/About'));
const Cart = lazy(()=> import('./pages/Cart'));
const Products = lazy(()=> import('./pages/Products'));
const ProductDetail = lazy(()=> import('./pages/ProductDetail'));
const PageNotFound = lazy(()=> import('./pages/PageNotFound'));

import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader/Loader";

import { ProductsContext } from "./contexts/ProductsContext";

function App() {
  return (
    <BrowserRouter>
      <ProductsContext>
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </Suspense>
      </ProductsContext>
    </BrowserRouter>
  );
}

export default App;
