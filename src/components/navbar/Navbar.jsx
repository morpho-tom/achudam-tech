import { useState, useEffect, useContext } from "react";
import { Menu, Drawer, Button, Row, Col, Image } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  InfoCircleOutlined,
  MenuOutlined,
  // MoonOutlined,
  PhoneOutlined,
  SettingOutlined,
  // SunOutlined,
} from "@ant-design/icons";
import "./Navbar.css";
import logo from "/Images/achudamLogoBlack64px.png";

const Navbar = () => {
  const location = useLocation(); // Get current URL
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(location.pathname || "/"); // Default to "/"

  console.log("Current Path:", location); // Debugging line to check the current path

  useEffect(() => {
    setCurrent(location.pathname || "/"); // Ensure Home is selected by default
  }, [location.pathname]);

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "/",
      icon: <HomeOutlined  />,
    },
    {
      label: <Link to="/product">Products</Link>,
      key: "/product",
      icon: <SettingOutlined  />,
    },
    {
      label: <Link to="/about">About</Link>,
      key: "/about",
      icon: <InfoCircleOutlined  />,
    },
    {
      label: <Link to="/contact">Contact</Link>,
      key: "/contact",
      icon: <PhoneOutlined  />,
    },
  ];

  return (
    <nav className={"light-nav"}>
      {/* Desktop Navbar
      <div className="desktop-nav">
        <Menu
          mode="horizontal"
          selectedKeys={[current]}
          items={items}
          onClick={onClick}
          style={{ justifyContent: "center" }}
        />
      </div> */}
      {/* Desktop Navbar */}
      <div className="desktop-nav">
        <Row align="middle" justify="space-between">
          <Col>
            <Link to="/">
              <Image
                src={logo}
                // width={100}
                alt="Company Logo"
                preview={false}
              />
            </Link>
          </Col>
          <Col flex="auto">
            <Menu
              mode="horizontal"
              selectedKeys={[current]}
              items={items}
              onClick={onClick}
              style={{
                justifyContent: "center",
                borderBottom: "none",
              }}
            />
          </Col>
          {/* <Col style={{ textAlign: "right" }}>
            <Tooltip
              title={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              <Switch
                checked={isDarkMode}
                onChange={toggleTheme}
                checkedChildren={<SunOutlined />}
                unCheckedChildren={<MoonOutlined />}
                style={{ marginRight: 16 }}
              />
            </Tooltip>
          </Col> */}
        </Row>
      </div>

      {/* Mobile Navbar */}
      {/* <div className="mobile-nav">
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
        />
        <Drawer
          title="Menu"
          placement="left"
          onClose={() => setVisible(false)}
          open={visible}
        >
          <Menu
            mode="vertical"
            selectedKeys={[current]}
            items={items}
            onClick={() => setVisible(false)}
          />
        </Drawer>
      </div> */}
      <div className="mobile-nav">
        <Row align="middle" justify="space-between" style={{ width: "100%" }}>
          <Col>
            <Link to="/">
              <Image
                src={logo}
                alt="Company Logo"
                preview={false}
                style={{
                  filter: "none",
                  height: 30,
                }}
              />
            </Link>
          </Col>
          <Col>
            <Button
              type="text"
              icon={<MenuOutlined style={{ fontSize: 20, color: "#000" }} />}
              onClick={() => setVisible(true)}
              style={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </Col>
        </Row>
        <Drawer
          title={
            // <div
            //   style={{
            //     display: "flex",
            //     alignItems: "center",
            //     justifyContent: "space-between",
            //   }}
            // >
            <Row align="middle" justify="space-between">
              <Col></Col>
              <Col>
                <Image
                  src={logo}
                  alt="Company Logo"
                  preview={false}
                  style={{
                    filter: "none",
                    height: 30,
                    marginRight: 8,
                  }}
                />
              </Col>
              {/* <Col>
                <Switch
                  size="small"
                  // checked={isDarkMode}
                  onChange={toggleTheme}
                  checkedChildren={<SunOutlined />}
                  unCheckedChildren={<MoonOutlined />}
                  style={{ marginRight: 16 }}
                />
              </Col> */}
            </Row>
            // </div>
          }
          placement="left"
          onClose={() => setVisible(false)}
          open={visible}
          width={280}
          headerStyle={{
            background: "#fff",
            borderBottom: "1px solid #f0f0f0",
          }}
          bodyStyle={{
            background: "#fff",
            padding: 0,
          }}
        >
          <Menu
            mode="vertical"
            selectedKeys={[current]}
            items={items}
            onClick={() => setVisible(false)}
            style={{
              borderRight: "none",
              background: "transparent",
              padding: "8px 0",
            }}
            theme={"light"}
          />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
