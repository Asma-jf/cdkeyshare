import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Layout from "./components/layout/Layout";
import Product from "./pages/product/Product";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />}></Route>
          <Route path="/product/$id" element={<Product />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
