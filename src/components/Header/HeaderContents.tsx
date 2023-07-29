import { useState, useEffect } from "react";
import Logo from "../../assets/images/header/logo.svg";
import IconCloseMenu from "../../assets/images/header/icon-close-menu.svg";
import IconHamburger from "../../assets/images/header/icon-hamburger.svg";

const HeaderContents = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  const handleResize = () => {
    setIsMenu(window.innerWidth > 767);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header__container">
      <a href="/" className="header__logo">
        <img src={Logo} alt="Logo-Crowdfunding" />
      </a>
      <button className="header__btn" onClick={handleMenu}>
        <img
          src={isMenu ? IconCloseMenu : IconHamburger}
          alt="Icon-Hamburger"
        />
      </button>

      {isMenu && (
        <div className="header__overflow fadeIn" role="navigation">
          <nav className="header__menu">
            <ul>
              <li>About</li>
              <li>Discover</li>
              <li>Get Started</li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HeaderContents;
