import { Link } from "react-router-dom"

function Success() {
  return(
    <div className="bg-dark d-flex align-items-center justify-content-center flex-column my-4 mx-auto p-4">
      <h2 >!! .سفارش با موفقیت <span className="text-success">ثبت</span> شد</h2>
      <Link to="/" className="btn btn-outline-primary mt-4">بازگشت به فروشگاه</Link>
    </div> 
  )
}
export default Success