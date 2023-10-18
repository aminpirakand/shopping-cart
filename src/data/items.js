const productList = [
  {
    id : 0,
    title:'Asus 1',
    price: 980, 
    image:'./images/laptop1.png'
  },
  {
    id : 2,
    title:'Asus 2',
    price: 880, 
    image:'./images/laptop2.png'
  },
  {
    id : 3,
    title:'Asus 3',
    price: 890, 
    image:'./images/laptop3.png'
  },
  {
    id : 4,
    title:'Asus 4',
    price: 740, 
    image:'./images/laptop4.png'
  },
  {
    id : 5,
    title:'Asus 5',
    price: 690, 
    image:'./images/laptop5.png'
  },
  {
    id : 6,
    title:'Asus 6',
    price: 990, 
    image:'./images/laptop1.png'
  },
  {
    id : 7,
    title:'Asus 7',
    price: 690, 
    image:'./images/laptop2.png'
  },
  {
    id : 8,
    title:'Asus 8',
    price: 490, 
    image:'./images/laptop3.png'
  },
  {
    id : 9,
    title:'Asus 9',
    price: 490, 
    image:'./images/laptop4.png'
  },
  {
    id : 10,
    title:'Asus 10',
    price: 720, 
    image:'./images/laptop2.png'
  }
]
function getProductData(id){
  let productData = productList.find((item)=> item.id === id)
  return productData
}
export {productList, getProductData}