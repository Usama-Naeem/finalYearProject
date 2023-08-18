import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { SideMenu } from "../../shared/utils/SideMenu";
import { Link } from "react-router-dom";
const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarItems, setSidebarItems] = useState(null);

  useEffect(() => {
    fetchMenuItems();
  }, []);
  const fetchMenuItems = () => {
    let menuItems;
    menuItems = Object.values(SideMenu).map((menuItem) => ({
      ...menuItem,
      label: <Link to={menuItem.route}>{menuItem.name}</Link>,
    }));
    setSidebarItems(menuItems);
  };
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={180}
      style={{
        background: "white",
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="light"
        defaultSelectedKeys={["host"]}
        mode="inline"
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
