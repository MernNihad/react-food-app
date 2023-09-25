import "./App.css";
import Header from "./components/Header";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Footer from "./components/Footer"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "product",
      element: <Product/>,
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer/>
    </>
  );
}

export default App;
