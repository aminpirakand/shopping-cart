import ListGroup from 'react-bootstrap/ListGroup';
function About(){
  return ( 
    <div className="bg-dark d-flex align-items-start justify-content-center flex-column my-4 mx-auto p-4" dir='rtl'>
      <p>طراحی به منظور یادگیری مفاهیم ری اکت و API  </p>
      <p>موارد مورد استفاده در این پروژه</p>
      <ListGroup as='ul' numbered>
      <ListGroup.Item as='li' className='bg-dark text-white'>React js</ListGroup.Item>
      <ListGroup.Item as='li'className='bg-dark text-white'>Mongodb</ListGroup.Item>
      <ListGroup.Item as='li'className='bg-dark text-white'>Express</ListGroup.Item>
    </ListGroup>
    </div> 
  )
}
export default About