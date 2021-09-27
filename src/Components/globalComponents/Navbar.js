import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import "../../Styles/Navbar.css";

//tutorial nav and routing: https://www.youtube.com/watch?v=CXa0f4-dWi4

/* function ToggleNav() {
  const [toggle, set] = useState(false)
  const transitions = useTransition(toggle, {

  })
};
 */
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <div className="navbar">
        <IconContext.Provider value={{ color: "#ffff", size: "3rem" }}>
          <Link to="#" className="menu-bars" value={{ color: "#ffff" }}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </IconContext.Provider>
      </div>
      <IconContext.Provider value={{ color: "#ffff", size: "5rem" }}>
        <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <React.Fragment className="nav-icon">
                      {item.icon}
                    </React.Fragment>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
