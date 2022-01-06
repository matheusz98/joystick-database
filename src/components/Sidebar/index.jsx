import Menu from "../Menu";
import { SidebarContainer } from "./style";

const Sidebar = ({ sidebar }) => {
  return (
    <SidebarContainer className={sidebar ? null : "active"}>
      <Menu />
    </SidebarContainer>
  );
};

export default Sidebar;
