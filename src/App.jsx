import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(function () {
    async function fetchData() {
      try {
        setisLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setData(data.products);
      } catch (error) {
        console.error("some error happened")
      } finally {
        setisLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home products={data} />} />
          <Route path="about" element={<About />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="products" element={data.length > 0 && <Products products={data} />} />
          <Route path="products/:id" element={<ProductDetail products={data} isLoading={isLoading}/>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
