import React from "react";
import { ISidebarItem } from "components/interface";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { PageUrl } from "configuration/enum";
import Config from "configuration";

type Props = {
  item: ISidebarItem;
  activeSidebarTitle: string;
  setActiveSidebarTitle: (label: string) => void;
};

const SidebarItem = ({
  setActiveSidebarTitle,
  item,
  activeSidebarTitle,
}: Props) => {
  const { label, src, icon = null } = item;
  const navigate = useNavigate();

  const handleClick = () => {
    setActiveSidebarTitle(label);
    if (src.includes(PageUrl.LOGIN)) {
      sessionStorage.removeItem(Config.storageKey.auth);
    }
    navigate(src);
  };

  const classnames = classNames("sidebar-list__item", {
    active: activeSidebarTitle === label,
  });

  return (
    <div key={label} onClick={handleClick} className={classnames}>
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default SidebarItem;
