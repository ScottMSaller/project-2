import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from "./components/Navbar"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import StoreLocator from "./pages/StoreLocator";
import MyRecipes from "./pages/MyRecipes";
import Search from './pages/Search';
import SignIn from "./pages/SignIn";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/store-locator",
    element: <StoreLocator/>
  },
  {
    path: "/search",
    element: <Search/>
  },
  {
    path: "/my-recipes",
    element: <MyRecipes/>
  },
  {
    path: "/signIn",
    element: <SignIn/>
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
  </StrictMode>,
)
