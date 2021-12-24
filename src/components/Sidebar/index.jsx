import Menu from "../Menu";
import { SidebarContainer } from "./style";

const Sidebar = ({ sidebar }) => {
  if (document.documentElement.clientWidth <= 860 && !sidebar) {
    document.body.style.overflow = "hidden"; // get rid of scroll
  } else {
    document.body.style.overflow = "auto"; // display scroll bar
  }

  return (
    <SidebarContainer className={sidebar ? null : "active"}>
      <Menu />
    </SidebarContainer>
  );
};

export default Sidebar;
