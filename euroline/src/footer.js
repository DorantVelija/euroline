import logo from './logo.png';
import instagram from './new-Instagram-logo-white-glyph.png';
import facebook from './facebook-logo-circle-white.png';
import whatsapp from './whats-app-whatsapp-whatsapp-icon.svg';


const Footer = () => {
    return ( 
        <footer>
          

        <div className="footerContainer">
        <div className="footerUl" id="footerLeft2">
                <div className="footerTop">
                  <img src={logo} alt="" id='footerImg' draggable="false" />
                </div>

                <div className="footerBottom">
                  <a className="footeritem" id="mainFooterText" href="https://dorantvelija.com/">Developed by Dorant Velija 2024</a>
                </div>

          </div>
      <ul className="footerUl" id="footerLeft">
        <a href="https://dorantvelija.com/contact" className="footeritem" id="euroLineFooterTitle">Contact</a>
        <a className="footeritem" href="https://github.com/DorantVelija/">Github</a>
        <a className="footeritem" href="https://linkedin.com/DorantVelija">LinkedIn</a>
        <a className="footeritem" href="https://dorantvelija.com/contact">Email</a>
      </ul>

      

     
      <ul className="footerUl" id="footerRight">
        <a className="footeritem" id="euroLineFooterTitle">EuroLine</a>
        <a className="footeritem">Contact</a>
        <a className="footeritem">+389-70-633-941</a>
        <a className="footeritem">+389-70-618-165</a>
        <a href="mailto:eurolinerentacar@gmail.com" className="footeritem">eurolinerentacar@gmail.com</a>
      </ul>

      <ul className="footerUl" id="footerRight2">

        <a href="" className="footeritem" id="euroLineFooterTitle">Social Media</a>
        <div>
          <a href='https://www.instagram.com/rentacareuroline/'><img src={instagram} alt="" className='socials' draggable="false"/> </a> 
          <a href=''><img src={facebook} alt="" className='socials' draggable="false"/></a>
          <a href=''><img src={whatsapp} alt="" className="socials" draggable="false"/></a>
        </div>
        </ul>
        </div>
       <hr />
        <h1> &#169;EuroLine 2024, All Rights Reserved</h1>
      </footer>

      
     );
}
 
export default Footer;