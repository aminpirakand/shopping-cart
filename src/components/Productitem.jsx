import {Card, Button} from "react-bootstrap"

function ProductItem({product}){
  return(
    <Card className="mt-2 card-bg" >
      <Card.Body>
        <Card.Img 
        variant="top" 
        src={product.image} 
        height='200px' 
        style={{objectFit:'cover'}}/>
        <Card.Title 
        align='right' 
        className="text-light pt-4">
          {product.title}
        </Card.Title>
        <Card.Text align='right' className="text-light">
          {product.price}
        </Card.Text>
        <Button size="sm" variant="outline-secondary text-black" >افزودن به سبد خرید</Button>
      </Card.Body>
    </Card>
  )
}
export default ProductItem