import {useState, useContext} from 'react'

import { Navbar as NavbarBs,NavbarBrand, Button, Modal, ModalBody} from 'react-bootstrap'
import {BsCart} from 'react-icons/bs'
import {CartContext} from '../context/CartContext'

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

return(
<>
<NavbarBs className='border-bottom border-secondary'>
<NavbarBrand href="/" className="text-white">X-SHOP</NavbarBrand>
  <NavbarBs.Collapse className='justify-content-end'>
    <Button onClick={handleShow} variant='btn btn-outline-secondary' className='text-white'>
      ({productsCount})<BsCart className='mx-2'></BsCart>سبد خرید</Button>
  </NavbarBs.Collapse>
</NavbarBs>

<Modal show={showModal} onHide={handleClose} contentClassName='card-bg' dir='rtl'>
  <Modal.Header closeButton closeVariant='white'>
    <Modal.Title>سبد خرید</Modal.Title>
    <Modal.Body>محصول</Modal.Body>
  </Modal.Header>
</Modal>
</>
)
}
export default Navbar