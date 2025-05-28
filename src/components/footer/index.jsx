import React from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import "./style.css";

const { Footer } = Layout;
const { Title, Link, Text } = Typography;

const AppFooter = () => {
  return (
    <Footer className="glass-footer">
      <div className="footer-content">
        <Row gutter={[32, 32]} justify="center">
          {/* Spacer column (optional) */}
          <Col xs={7} sm={9} md={6} lg={6} xl={6}></Col>

          {/* About section */}
          <Col xs={9} sm={8} md={6} lg={4} xl={4}>
            <Title level={4}>About</Title>
            <Space direction="vertical" size="middle">
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/product">Products</Link>
            </Space>
          </Col>

          {/* Follow Us section */}
          <Col xs={8} sm={7} md={6} lg={6} xl={6}>
            <Title level={4}>Follow Us</Title>
            <Space direction="vertical" size="middle">
              <Link href="#">
                <FacebookOutlined /> Facebook
              </Link>
              <Link href="#">
                <TwitterOutlined /> Twitter
              </Link>
              <Link href="#">
                <InstagramOutlined /> Instagram
              </Link>
              <Link href="#">
                <LinkedinOutlined /> LinkedIn
              </Link>
            </Space>
          </Col>
        </Row>

        <div className="footer-bottom">
          <Text>© 2025 Achudamtech. All rights reserved.</Text>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
