
// import './App.css'
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import Product from "./components/Product";
import { Login } from "./pages/Login";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
 

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
          path: "/about",
          element: <About />
       },
       {
        path: "/contact",
        element: <Contact />
     },
        {
          path: "/cart",
          element: <Cart />
        }, 
        {
          path: "/login",
          element: <Login />
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
