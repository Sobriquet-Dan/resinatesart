import './Header.css';
import {Link} from "react-router-dom";
const Header = () => {
  return(
      <section className={'navBar'}>
          <h1 className={'nav-logo'}><Link to="/" >Resinates</Link></h1>
          <ul className={"navlinks"}>
              <div className={"menu"}>
                  <Link to={"/paint"}><li>Paint</li></Link>
                  <Link to={"/resin"}><li>Resin</li></Link>
                  <Link to={"/about"}><li>About</li></Link>
              </div>
          </ul>
      </section>
  )
}
export default Header;