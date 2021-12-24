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
          <h1>Joystick Database</h1>
        </NavbarLogo>
        <NavbarSearch>
          <SearchBar />
        </NavbarSearch>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
