import { useContext } from "react"
import { Button } from "react-bootstrap"

import { CartContext } from "../context/CartContext"

import {getProductData} from '../data/items'

function CartProduct({id, quantity}){
  const cart = useContext(CartContext)

  const productData = getProductData(id)

  return(
    <div className='border-bottom border-secondary mb-4'>
      <p>{productData.title}</p>
      <p>تعداد: {quantity}</p>
      <p>قیمت: {quantity * productData.price}</p>

      <Button size="sm" className="mb-5 text-white" variant="btn btn-outline-secondary" onClick={()=> cart.deleteFromCart(id)} > حذف از سبد خرید </Button>
    
    </div>
  )
}
export default CartProduct