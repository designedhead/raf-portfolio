import { useState, useEffect } from "react";

function Nav() {
  const [nav, setNav] = useState(false);

  const [navColor, setNavColor] = useState(false);

  const [burgerIcon, setBurgerIcon] = useState(false);

  const clearMobileMenu = () => {
    setNav(false);
    setBurgerIcon(false);
  };
  useEffect(() => {
    const handleNavColor = () => {
      if (window.scrollY >= 90) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    };

    return () => {
      // Cleanup the event listener
      document.addEventListener("scroll", handleNavColor);
    };
  }, []);

  return (
    <div
      className="nav"
      id="nav"
      style={{
        backgroundColor: navColor ? "#071223" : "transparent",
        boxShadow: navColor ? "0px 6px 16px 1px rgba(0, 0, 0, 0.093)" : "",
      }}
    >
      <div className="nav_wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 119.98 138.54"
          className="nav_logo fade-in"
          onClick={() => window.scrollTo(0, 0)}
        >
          <polygon
            className="logo_polygon"
            fill="#13304000"
            stroke="#63FFDA"
            strokeWidth="6"
            points="1 35.21 1 103.33 59.99 137.38 118.98 103.33 118.98 35.21 59.99 1.15 1 35.21"
          />
          <g>
            <path
              fill="#63FFDA"
              d="M44.18,72.81h-7.68v15.68h-4.86V50.05h11.27c1.8,.04,3.48,.29,5.07,.77,1.58,.48,2.97,1.19,4.16,2.14,1.19,.95,2.12,2.14,2.8,3.58s1.02,3.12,1.02,5.06c0,1.25-.18,2.39-.54,3.43-.36,1.04-.86,1.98-1.49,2.83-.63,.84-1.39,1.59-2.27,2.24-.88,.65-1.85,1.21-2.9,1.66l8.16,16.42-.03,.32h-5.15l-7.55-15.68Zm-7.68-4.01h6.55c1.09-.02,2.12-.19,3.09-.51,.97-.33,1.82-.8,2.55-1.41,.73-.62,1.31-1.37,1.73-2.26,.42-.89,.63-1.91,.63-3.08,0-1.23-.2-2.31-.61-3.23-.41-.92-.97-1.7-1.69-2.32-.72-.62-1.58-1.1-2.57-1.41-.99-.32-2.08-.48-3.26-.5h-6.42v14.73Z"
            />
            <path
              fill="#63FFDA"
              d="M69.26,50.05l6.26,19.22,6.76-19.22h6.07v38.44h-4.75v-15.34l.4-16.05-7.1,20.7h-2.8l-6.52-20.14,.4,15.5v15.34h-4.75V50.05h6.05Z"
            />
          </g>
        </svg>
        <div className="nav_right">
          <div
            className={nav ? "menu_items active" : "menu_items"}
            style={{ inset: nav ? "0 0 0 30%" : "0 0 0 120%" }}
          >
            <nav>
              <ol>
                <li className="slide-bottom2">
                  <a href="#about_" onClick={clearMobileMenu}>
                    About
                  </a>
                </li>
                <li className="slide-bottom3">
                  <a href="#experience_" onClick={clearMobileMenu}>
                    Experience
                  </a>
                </li>
                <li className="slide-bottom4">
                  <a href="#work_" onClick={clearMobileMenu}>
                    Work
                  </a>
                </li>
                <li className="slide-bottom5">
                  <a href="#contact_" onClick={clearMobileMenu}>
                    Contact
                  </a>
                </li>
              </ol>
              <div className="nav_bt mobile" onClick={clearMobileMenu}>
                Resume
              </div>
            </nav>
          </div>
          <div
            id="toggle"
            className="burger_menu"
            onClick={nav ? () => setNav(false) : () => setNav(true)}
          >
            <input
              type="checkbox"
              checked={burgerIcon}
              onChange={() => setBurgerIcon(!burgerIcon)}
            />
            <label htmlFor="menu"></label>
            <span></span>
          </div>
          <a
            // href="/Rafael_Mendes_-Frontend.pdf"
            href="mailto:mrrafaelmendes@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="nav_bt slide-bottom6">Say Hello</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
