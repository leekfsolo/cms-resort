import React from "react";
import SidebarItem from "./SidebarItem";
import { Logo } from "assets";
import { ISidebarItem } from "components/interface";
import { getUsername } from "utils/getUsername";

type Props = {
  sideBarItems: ISidebarItem[];
  setActiveSidebarTitle: (label: string) => void;
  activeSidebarTitle: string;
};

const Sidebar = (props: Props) => {
  const { sideBarItems, setActiveSidebarTitle, activeSidebarTitle } = props;
  const username = getUsername();

  return (
    <div className="sidebar">
      <div className="sidebar-info d-flex align-items-center">
        <div className="sidebar-info__logo">
          <img src={Logo} alt="logo" className="img-fluid" />
        </div>
        <div className="sidebar-info__user">
          <div className="username">{username || "username"}</div>
          <div className="role">Admin</div>
        </div>
      </div>
      <nav className="sidebar-list">
        {sideBarItems.map((item) => (
          <SidebarItem
            key={item.label}
            item={item}
            setActiveSidebarTitle={setActiveSidebarTitle}
            activeSidebarTitle={activeSidebarTitle}
          />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
