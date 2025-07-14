import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"

import CartList from "./components/CartList"
import ProductList from "./components/ProductList"
import { CartProvider } from "./context/CartProvider"
import BuyerForm from "./components/BuyerForm"


function App() {


  return (
   <div className="min-h-screen  items-center justify-center bg-gray-100" style={{width:1530}}>
  <CartProvider>
    <BrowserRouter>
      <nav className="p-4 bg-gray-100 flex space-x-4">
        <NavLink to="/" className="text-blue-600 hover:underline">Home</NavLink>
        <NavLink to="/cart" className="text-blue-600 hover:underline">Cart</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={
          <div className="max-w-4xl mx-auto p-4 space-y-6">
            <CartList />
            <BuyerForm />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  </CartProvider>
</div>
   
  )
}

export default App
