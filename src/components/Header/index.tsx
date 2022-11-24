import React from "react";
import { Divide as Hamburger } from "hamburger-react";
import { useAppDispatch } from "app/hooks";
import { handleBackdrop, handleSidebar } from "app/globalSlice";
import Breadcrumbs from "@mui/material/Breadcrumbs";

type Props = {
  activeSidebarTitle: string;
  isShowSidebar: boolean;
};

const Header = (props: Props) => {
  const { activeSidebarTitle, isShowSidebar } = props;
  const dispatch = useAppDispatch();

  const toggleMenu = (toggled: boolean) => {
    dispatch(handleBackdrop(toggled));
    dispatch(handleSidebar(toggled));
  };

  return (
    <header className="header">
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <h4>Dashboard</h4>
          <h4 className="header-active">{activeSidebarTitle}</h4>
        </Breadcrumbs>
      </div>
      <div className="d-block d-lg-none header-collapse">
        <Hamburger size={20} toggled={isShowSidebar} onToggle={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
