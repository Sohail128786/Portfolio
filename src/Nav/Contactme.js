// import { SocialIcon } from 'react-native-elements';
import {FaFacebook,FaTwitter,FaInstagram,FaWhatsapp,FaGithub, FaLinkedin} from 'react-icons/fa';

function Callme() {
    return (
      <><div className='cont-parent'>
      <div className='contact_pic'> 
        <img src="image/me.jpg" alt="this is my pic"></img>
      </div>
      <div className='contact_text'> 
        <h1>Contact Me</h1>
        <p>I am available on almost every social media. You can message me, I will reply within 24 hours.
         I can help you with ML, AI, React, Android, Cloud and Opensource Development.</p>
        <div className='socialIcons'>
        <i className='icon facebook'><FaFacebook/></i> 
        <i className='icon twitter'><FaTwitter/></i> 
        <i className='icon instagram'><FaInstagram/></i> 
        <i className='icon github'><FaGithub/></i> 
        <i className='icon linkedin'><FaLinkedin/></i> 
        <i className='icon whatsapp'><FaWhatsapp/></i> 
        </div>
      </div>
      </div>
      <div className='add-parent'>
      <div className='add-img'>
        <img src='image/cm.png' alt='somthing'/>
        </div>
        <div className='add-text'>
        <h1>Address</h1>
        <p>Greetings! I'm Sohail, a passionate frontend developer hailing from the picturesque town of Mardan in Khyber Pakhtunkhwa (KPK). I weave digital dreams into reality, one line of code at a time</p>
        </div>
      </div>
      </>
      );
  }
  export default Callme; 