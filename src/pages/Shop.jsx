import {Row, Col} from 'react-bootstrap'
import ProductItem from '../components/productitem'
import { productList } from '../data/items'

function Shop(){
  return (
     <Row xs={1} md={3} lg={4} className='g-3 mt-2'>
      {productList.map((item)=>(
        <Col align='center' key={item.id}>
          <ProductItem  product={item} />
        </Col>
      ))}
     </Row>
  )
}
export default Shop