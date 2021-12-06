import Image from "next/image";
import Link from "next/link";

import logo from "../../img/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="col-md-12">
        <div className="nav">
          <button className="btn-nav">
            <span className="icon-bar inverted top"></span>
            <span className="icon-bar inverted middle"></span>
            <span className="icon-bar inverted bottom"></span>
          </button>
        </div>
        <a className="navbar-brand" href="index.html">
          <Image
            loading="lazy"
            className="logo"
            src={logo}
            alt="logo"
            width="300px"
            height="90px"
          />
        </a>
        <div className="nav-content hideNav hidden">
          <ul className="nav-list vcenter">
            <li className="nav-item">
              <Link href="/">
                <a className="item-anchor">
                  Inicio
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="item-anchor" href="/about">
                Sobre mi
              </a>
            </li>
            <li className="nav-item">
              <a className="item-anchor" href="/portfolio">
                Portafolio
              </a>
            </li>
            <li className="nav-item">
              <a className="item-anchor" href="/contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
