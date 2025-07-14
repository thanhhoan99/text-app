import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"

import CartList from "./components/CartList"
import ProductList from "./components/ProductList"
import { CartProvider } from "./context/CartProvider"
import BuyerForm from "./components/BuyerForm"


function App() {


  return (
  <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 px-6 py-8" style={{ width: 1530 }}>
  <CartProvider>
    <BrowserRouter>
      <nav className="p-4 flex space-x-8 justify-center bg-white shadow rounded w-full max-w-4xl mb-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-blue-600 hover:underline font-medium ${isActive ? 'underline decoration-2' : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `text-blue-600 hover:underline font-medium ${isActive ? 'underline decoration-2' : ''}`
          }
        >
          Cart
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route
          path="/cart"
          element={
            <div className="max-w-4xl mx-auto p-6 space-y-8 bg-white rounded shadow"  >
              <CartList />
              <BuyerForm />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </CartProvider>
</div>
  )
}

export default App
