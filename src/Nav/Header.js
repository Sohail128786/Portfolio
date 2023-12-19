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

 <nav className='nav sticky-header'>
 <Link to="/" className='nav-item'>Home</Link>
 <Link to="/Cover letter" className='nav-item'>Certificate</Link>
 <Link to="/CV" className='nav-item'>CV</Link>
 <Link to="/Contectme" className='nav-item'>Contact Me</Link>
</nav>

 <Routes>       
   <Route path="/" element={<Home/>}></Route>
   <Route path="/Cover letter" element={<About/>}></Route>
   <Route path='/CV' element={<Cv/>}></Route>
   <Route path='/Contectme' element={<Callme/>}></Route>
 </Routes>
 
 </div>

);
}
export default Header;