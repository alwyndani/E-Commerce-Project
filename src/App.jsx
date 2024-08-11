
// import './App.css'
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import Product from "./components/Product";

function App() {

  const Layout =()=> {
    return (
      <div>
        <Header />
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
           path: "/product/:id",
           element: <Product />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]
    }
  ])

  return (
    <div className="font-bodyFont">
    <RouterProvider router={router} />
    </div>
  )
}

export default App;
