import '../App';
import React from "react";
import Home from './Home';
import About from './Certificats';
import Cv from './CV';
import Callme from './Contactme';
import { Routes, Route, Link } from "react-router-dom";



function Header(){
return(
  
  <div className='main'> 
{/* <img src='' alt='main logo' /> */}
 <nav className='nav sticky-header'>
 <Link to="/" className='nav-item'>Home</Link>
 <Link to="/coverletter" className='nav-item'>Certificate</Link>
 <Link to="/cv" className='nav-item'>CV</Link>
 <Link to="/contectme" className='nav-item'>Contact Me</Link>
</nav>

 <Routes>       
   <Route path="/" element={<Home/>}></Route>
   <Route path="/coverletter" element={<About/>}></Route>
   <Route path='/cv' element={<Cv/>}></Route>
   <Route path='/contectme' element={<Callme/>}></Route>
 </Routes>
 
 </div>

);
}
export default Header;