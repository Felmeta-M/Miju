import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";

const App = () => {
  const user = true;
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
