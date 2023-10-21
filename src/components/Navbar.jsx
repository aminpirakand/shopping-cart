import {useState, useContext} from 'react'

import { Navbar as NavbarBs,NavbarBrand, Button, Modal, ModalBody} from 'react-bootstrap'
import {BsCart} from 'react-icons/bs'
import {CartContext} from '../context/CartContext'
import CartProduct from './CartProduct'
import { Link } from 'react-router-dom'
function Navbar(){
  const [showModal,setShowModal] = useState(false)

  const cart = useContext(CartContext)

  const productsCount = cart.items.reduce((sum, product)=> sum + product.quantity , 0)


  const handleShow=()=>{
    setShowModal(true)
  }
  const handleClose=()=>{
    setShowModal(false)
  }
   async function checkOut(){
    const response =  await fetch('http://localhost:3000/api',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ items: cart.items}),
    })
    const data = await response.json()
    if(data.url){
      window.location.assign(data.url)
    }
   }
return(
<>
<NavbarBs className='border-bottom border-secondary'>
<NavbarBrand className="text-white"><Link to='/' className='btn text-white'>X-SHOP</Link></NavbarBrand>
 <Link to='/about' className='btn text-white'>درباره ما</Link>
  <NavbarBs.Collapse className='justify-content-end'>
    <Button onClick={handleShow} variant='btn btn-outline-secondary' className='text-white'>
      (<span className='text-warning'>{productsCount}</span>)
      <BsCart className='mx-2'></BsCart>سبد خرید</Button>
  </NavbarBs.Collapse>
</NavbarBs>

<Modal show={showModal} onHide={handleClose} contentClassName='card-bg'  dir='rtl'>
  <Modal.Header className="bg-dark">
    <Modal.Body>
      {productsCount > 0 ? (
        <>
        <div className='border-bottom border-secondary mb-4'>
          <h3 className='my-2'>سبد خرید</h3>
        </div>
          {cart.items.map((item)=>(
            <CartProduct key={item.id} id={item.id} 
            quantity={item.quantity}></CartProduct>
          ))}
        <h4>مجموع قیمت: {cart.getTotalAmount()} تومان</h4>
        </>
      ) : (
          <h3>سبد خرید خالی است</h3>  
      )}
      <Button className='mt-4 mx-2' variant='btn btn-outline-success' onClick={checkOut}>ثبت سفارش</Button>
      <Button 
      onClick={handleClose}
      variant='btn btn-outline-danger'
      className='mt-4 mx-auto'
      >بستن</Button>
      </Modal.Body>
  </Modal.Header>
</Modal>
</>
)
}
export default Navbar