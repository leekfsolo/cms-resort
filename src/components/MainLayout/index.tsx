import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { PageUrl } from "configuration/enum";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import { ISidebarItem } from "components/interface";
import Header from "components/Header";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { globalSelector } from "app/selectors";

const MainLayout = () => {
  const sidebarItems: Array<ISidebarItem[]> = useMemo(
    () => [
      [
        {
          label: "Home",
          src: PageUrl.HOME,
          icon: <CottageOutlinedIcon />,
        },
        {
          label: "Customer",
          src: PageUrl.CUSTOMER,
          icon: <GroupOutlinedIcon />,
        },
        {
          label: "Room",
          src: PageUrl.ROOM,
          icon: <KingBedOutlinedIcon />,
        },
        {
          label: "Log out",
          src: `/${PageUrl.LOGIN}`,
          icon: <LogoutOutlinedIcon />,
        },
      ],
    ],
    []
  );
  const [activeSidebarTitle, setActiveSidebarTitle] =
    useState<string>("Dashboard");
  const { isShowSidebar } = useSelector(globalSelector);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(activeSidebarTitle.toLowerCase(), { replace: true });
  }, []);

  const wrapperSidebarClassname = classNames("wrapper-sidebar", {
    isShowSideBar: isShowSidebar,
  });

  return (
    <div className="container-fluid p-0 m-0">
      <div className="wrapper d-flex">
        <div className={wrapperSidebarClassname}>
          <Sidebar
            sideBarItems={sidebarItems}
            setActiveSidebarTitle={setActiveSidebarTitle}
            activeSidebarTitle={activeSidebarTitle}
          />
        </div>
        <div className="wrapper-main">
          <Header
            activeSidebarTitle={activeSidebarTitle}
            isShowSidebar={isShowSidebar}
          />

          <main className="main">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
