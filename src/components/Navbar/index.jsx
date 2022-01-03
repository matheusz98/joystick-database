import LogoIMG from "../../assets/icons/logo.svg";
import { Nav, NavbarContainer, NavbarLogo, NavbarIcon } from "./style";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavbarLogo to="/">
          <NavbarIcon src={LogoIMG} alt="Joystick Database" />
          Joystick Database
        </NavbarLogo>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
