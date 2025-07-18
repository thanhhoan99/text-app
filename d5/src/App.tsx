import React, { useState } from 'react'

import ButtonClickCounter from './components/ButtonClickCounter'
import InputFieldTracker from './components/InputFieldTracker'
import ToggleSwitch from './components/ToggleSwitch'
import HoverHighlight from './components/HoverHighlight'
import FormSubmissionAlert from './components/FormSubmissionAlert'
import KeyPressDisplay from './components/KeyPressDisplay'
import DoubleClickMessage from './components/DoubleClickMessage'
import Dropdown from './components/Dropdown'
import CheckboxStatus from './components/CheckboxStatus'
import SearchFilterList from './components/SearchFilterList'
import Calculator from './components/Calculator'
import Form from './components/Form'
import { CartProvider } from './components/Cart/CartContext'
import CartIcon from './components/Cart/CartIcon'
import ProductGrid from './components/Cart/ProductGrid'
import CartDropdown from './components/Cart/CartDropdown'
import styles from './components/Cart/ProductCard.module.css';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' ,marginLeft: '400px'}}>
      <div >
        <ButtonClickCounter />
      </div>
      <br></br>
        <InputFieldTracker />
      <br></br>
        <ToggleSwitch />
      <br></br>
      <HoverHighlight/>
      <br></br>
        <FormSubmissionAlert/>
      <br></br>
      <KeyPressDisplay />
      <br></br>
      <DoubleClickMessage />
      <br></br>
      <Dropdown />
      <br></br>
      <CheckboxStatus />

      <br></br>
      <SearchFilterList />
      <br></br>
      <Calculator />
      <br></br>
      <Form/>
       <br></br>
        <br></br>
         <CartProvider>
      <div className={styles.header}>
        <div className={styles.logo}>Big MARKET</div>
        <div className={styles.cartArea}>
          <CartIcon onClick={() => setShowCart(s => !s)} />
          {showCart && <CartDropdown />}
        </div>
      </div>
      <div className={styles.container}>
        <h2>Thực phẩm khô</h2>
        <ProductGrid />
      </div>
    </CartProvider>
    </div>

  )
}

export default App
