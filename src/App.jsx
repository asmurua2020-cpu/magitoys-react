import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/carrito" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;