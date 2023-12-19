// import React, { useState } from 'react';
import edu from'../assiste/cert.jpg'
import icn from'../assiste/home2.jpg'
function About() {
  return (
    <>
    <div className='cert-p'>
    <div className='chome'> 
      <img src={edu} alt="A beautiful landscape" />
    </div>
    <div className='chometext'>
    <h1>Education</h1>
      <h3>Basic Qualification and Certifcations</h3>
      <img src={icn} alt='this is icon pic'/>
    </div>
    </div>
    <h1>Certifications</h1>
    <div className='gellary'>
    <div className='c-pic' >
      <a href="https://www.coursera.org/account/accomplishments/verify/GEY7T2D3XYH8" target="_blank" rel="noreferrer">
        <img src="image/ibm.jpg" alt="Coding Beauty logo" ></img>
      </a>
      </div>
      <div className='c-pic' >
      <a href="https://www.coursera.org/account/accomplishments/verify/JTT3S5Z2BGP9" target="_blank" rel="noreferrer">
        <img src="image/wp.jpg" alt="Coding Beauty logo" ></img>
      </a>
      </div>
      <div className='c-pic' >
      <a href="https://www.coursera.org/account/accomplishments/verify/UMAA3BDU9WG8" target="_blank" rel="noreferrer">
        <img src="image/meta.jpg" alt="Coding Beauty logo" ></img>
      </a>
      </div>
      <div className='c-pic' >
      <a href="https://www.coursera.org/account/accomplishments/verify/RA7MLVV9M8SB" target="_blank" rel="noreferrer">
        <img src="image/rice.jpg" alt="Coding Beauty logo" ></img>
      </a>
      </div>
      <div className='c-pic' >
      <a href="https://www.coursera.org/account/accomplishments/verify/C86PVJ6KXPT3" target="_blank" rel="noreferrer">
        <img src="image/sql.jpg" alt="Coding Beauty logo" ></img>
      </a>
      </div>
      <div className='c-pic' >
      <a href="https://www.coursera.org/account/accomplishments/verify/9SHTWMCE2ME9" target="_blank" rel="noreferrer">
        <img src="image/muni.jpg" alt="Coding Beauty logo" ></img>
      </a>
      </div>
      <div className='c-pic' >
      <a href="https://www.coursera.org/account/accomplishments/verify/UBQQ7ASD8X8R" target="_blank" rel="noreferrer">
        <img src="image/uci.jpg" alt="Coding Beauty logo" ></img>
      </a>
      </div>
      <div className='c-pic' >
      <a href="https://www.coursera.org/account/accomplishments/verify/K3M2S4G5G5WD" target="_blank" rel="noreferrer">
        <img src="image/dataa.jpg" alt="Coding Beauty logo" ></img>
      </a>
      </div>
      <div className='c-pic' >
      <a href="https://www.coursera.org/account/accomplishments/verify/MJAAQQR5VYKC" target="_blank" rel="noreferrer">
        <img src="image/penn.jpg" alt="Coding Beauty logo" ></img>
      </a>
      </div>
      <div className='c-pic' >
      <a href="https://www.coursera.org/account/accomplishments/verify/9V8TGE7GCGXZ" target="_blank" rel="noreferrer">
        <img src="image/java.jpg" alt="Coding Beauty logo" ></img>
      </a>
      </div>
      <div className='c-pic' >
      <a href="https://www.coursera.org/account/accomplishments/verify/SKQFRRWNQ85Z" target="_blank" rel="noreferrer">
        <img src="image/net.jpg" alt="Coding Beauty logo" ></img>
      </a>
      </div>
      <div className='c-pic' >
      <a href="https://www.coursera.org/account/accomplishments/verify/9V8TGE7GCGXZ" target="_blank" rel="noreferrer">
        <img src="image/uci2.jpg" alt="Coding Beauty logo" ></img>
      </a>
    </div>
    </div>
    
    </>
  );
}
export default About; 
  // const [links, setLinks] = useState([
  
  //   { id: 1, imageUrl: '../assiste/edu.jpeg', linkUrl: 'https://coursera.org/verify/UMAA3BDU9WG8' },
  //   { id: 2, imageUrl: '../assiste/wb.jpg', linkUrl : 'https://example.com/page2' },
  //   { id: 3, imageUrl: '../assiste/wb.jpg', linkUrl: 'https://example.com/page3' },
  // ]);
  // const handleImageClick = (linkUrl) => {
  //   window.open(linkUrl, '_blank'); // Opens the link in a new tab
  // };
  // {links.map((link) => (
  //       <div key={link.id} className="image-div" onClick={() => handleImageClick(link.linkUrl)}>
  //         <img src={link.imageUrl} alt={`Image ${link.id}`} />
  //       </div>
  //     ))}