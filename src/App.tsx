import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Layout from "./components/layout/Layout";
import Product from "./pages/product/Product";
import TabsExample from "./pages/tab/TabExample";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />}></Route>
          <Route path="/products/:id" element={<Product />}></Route>
          <Route path="/tab" element={<TabsExample />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
