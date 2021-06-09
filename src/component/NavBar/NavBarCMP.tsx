import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

interface Props {}

function NavBarCMP() {
  return (
    <>
      <nav className="navbar">
        <div className="navbarLogo">
          <a href="/">About</a>
        </div>
      </nav>
    </>
  );
}
export default NavBarCMP;
