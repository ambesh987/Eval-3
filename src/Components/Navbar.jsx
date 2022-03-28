import React from 'react'
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <>
     <div>
         <Link to="/">Home</Link> &nbsp; &nbsp;
         <Link to="/register">Register</Link>&nbsp; &nbsp;
         <Link to="/login">Login</Link>&nbsp; &nbsp;
         <Link to="/products">Products</Link>&nbsp; &nbsp;
         {/* <Link to="/products:id">Product Id</Link>&nbsp; &nbsp; */}
        
     </div>
    </>
  )
}

export default Navbar