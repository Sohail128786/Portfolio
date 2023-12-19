import home from'../assiste/home.png'
import home1 from'../assiste/home1.png'
import home2 from'../assiste/home2.jpg'
import {FaFacebook,FaTwitter,FaInstagram,FaWhatsapp,FaGithub, FaLinkedin} from 'react-icons/fa';

function Home() {
  return (
    <>
    <div className='home_p'> 
    <div className='hometext'>
    <h1>Muhammad Sohail</h1>
    <h2>(Developer)</h2>
      <p>A passionate individual who always thrives to work on end to end products which develop 
      sustainable and scalable social and technical systems to create impact.</p>
        <div className='socialIcons'> 
        <i className='icon facebook'><FaFacebook/></i> 
        <i className='icon twitter'><FaTwitter/></i> 
        <i className='icon instagram'><FaInstagram/></i> 
        <i className='icon github'><FaGithub/></i> 
        <i className='icon linkedin'><FaLinkedin/></i> 
        <i className='icon whatsapp'><FaWhatsapp/></i> 
        </div>
         </div>
      <div className='homeimg'>
       <img src={home} alt="A beautiful landscape" />
      </div>
    </div>
    <div className='center'>
    <h1>What I Do ?</h1>
    </div>
    <div className='skil_p'>
    <div className='skil-img'>
    <img src={home1} alt='it is a logo pic'/>
    </div>
    <div className='skil'>
    <h1>Full Stack Development</h1>
    <img src={home2} alt='this is icon pic'/>
    <p> <i className="fa">&#xf0e7;</i>Building responsive website front end using React-Redux</p>
    <p>  <i className="fa">&#xf0e7;</i>Developing mobile applications using Flutter, React Native and solo android apps using Kotlin</p>
    <p>  <i className="fa">&#xf0e7;</i>Creating application backend in Node, Express & Flask</p>
    </div>
    </div>
    

    </>
  );
} 

export default Home;
