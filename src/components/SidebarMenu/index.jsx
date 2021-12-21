import { SidebarButton, SidebarIcon } from "./style";

const SidebarMenu = ({ sidebar, setSidebar }) => {
  return (
    <SidebarButton>
      <SidebarIcon
        onClick={() => {
          setSidebar(!sidebar);
        }}
      />
    </SidebarButton>
  );
};

export default SidebarMenu;
