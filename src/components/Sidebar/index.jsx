import Menu from "../Menu";
import { SidebarContainer } from "./style";

const Sidebar = ({ sidebar }) => {
  if (document.documentElement.clientWidth <= 860 && !sidebar) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <SidebarContainer className={sidebar ? null : "active"}>
      <Menu />
    </SidebarContainer>
  );
};

export default Sidebar;
