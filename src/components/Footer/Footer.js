import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faTiktok} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return(
      <section className={"footer"}>
        <h3>Made with ❤️ in TX by Sobriquet</h3>
        <div className="socials">
          <a href="https://www.facebook.com/resinates" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className={'fb'}/></a>
          <a href="https://www.instagram.com/resinatesart/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className={'insta'}/></a>
          <a href="https://www.tiktok.com/@resinatesartannie" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} className={'tik'}/></a>
        </div>
      </section>
  )
}
export default Footer;