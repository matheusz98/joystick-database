import LogoIMG from "../../assets/icons/logo.svg";
import SearchBar from "../SearchBar";
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  NavbarSearch,
  NavbarIcon,
} from "./style";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavbarLogo to="/">
          <NavbarIcon src={LogoIMG} alt="Joystick Database" />
          Joystick Database
        </NavbarLogo>
        <NavbarSearch>
          <SearchBar />
        </NavbarSearch>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
