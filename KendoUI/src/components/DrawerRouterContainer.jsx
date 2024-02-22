import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";

const items = [
  {
    name: "Dashboard",
    className: "fa-solid fa-grip",
    selected: true,
    route: "/",
  },
  {
    name: "Profile",
    className: "fa-solid fa-user",
    selected: true,
    route: "/profile",
  },
  {
    name: "Info",
    className: "fa-solid fa-info",
    selected: true,
    route: "/info",
  },
];

function DrawerRouterContainer(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const [expanded, setExpanded] = React.useState(false);
  const [isSmallScreen, setIsSmallScreen] = React.useState(
    window.innerWidth < 768
  );

  const getSelectedItem = (pathName) => {
    let currentPath = items.find((item) => item.route === pathName);
    if (currentPath && currentPath.name) {
      return currentPath.name;
    }
  };

  const handleSelect = (e) => {
    if (isSmallScreen) {
      setExpanded(!expanded);
    }
    navigate(e.itemTarget.props.route);
  };
  const handleMenuClick = () => {
    setExpanded(!expanded);
  };
  let selected = getSelectedItem(location.pathname);

  return (
    <div>
      <Header onMenuClick={handleMenuClick} />
      <Drawer
        expanded={expanded}
        animation={{ duration: 100 }}
        items={items.map((item) => ({
          ...item,
          text: item.name,
          selected: item.name === selected,
        }))}
        position="start"
        onSelect={handleSelect}
        mode={isSmallScreen ? "overlay" : "push"}
        mini={isSmallScreen ? false : true}
      >
        <DrawerContent>{props.children}</DrawerContent>
      </Drawer>
    </div>
  );
}

export default DrawerRouterContainer;
