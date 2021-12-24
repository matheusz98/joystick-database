import { MenuContainer, MenuItem, JoystickIcon } from "./style";

const Menu = ({ selectedItem }) => {
  return (
    <MenuContainer>
      <MenuItem to="/games-home">
        Home
        <JoystickIcon />
      </MenuItem>
      <MenuItem to="/popular-games">
        Popular Games
        <JoystickIcon />
      </MenuItem>
      <MenuItem to="/new-games">
        New Games
        <JoystickIcon />
      </MenuItem>
      <MenuItem to="/upcoming-games">
        Upcoming Games
        <JoystickIcon />
      </MenuItem>
      <MenuItem to="/genres">
        Genres
        <JoystickIcon />
      </MenuItem>
      <MenuItem to="/platforms">
        Platforms
        <JoystickIcon />
      </MenuItem>
      <MenuItem to="/publishers">
        Publishers
        <JoystickIcon />
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;
