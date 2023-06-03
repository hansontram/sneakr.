import React from 'react'

const Cart = ({cartItems}) => {
  return (
    <div>
      <h2>Your Cart</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
      </div>
    </div>
  )
}

export default Cart
