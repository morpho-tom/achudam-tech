import React from "react";
import { Row, Col, Form, Input, Button, Typography, Image, message } from "antd";
import emailjs from "emailjs-com";
import ContactUS from "./contactus.jpg";
import "./style.css";

const { Title } = Typography;
const { TextArea } = Input;

const ContactUs = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const templateParams = {
      name: values.name,
      company: values.company,
      email: values.email,
      address: values.address,
      phone: values.phone,
      city: values.city,
      zipcode: values.zipcode,
      state: values.state,
      description: values.description,
    };

    emailjs.send(
      "service_2r0ev4h",     // Replace with your EmailJS service ID
      "template_m7tomqg",    // Replace with your EmailJS template ID
      templateParams,
      "kMZFiPyEaXRgnATc4"      // Replace with your EmailJS public key
    )
    .then((response) => {
      message.success("Message sent successfully!");
      form.resetFields();
      console.log("SUCCESS!", response.status, response.text);
    })
    .catch((err) => {
      message.error("Failed to send message. Please try again.");
      console.log("FAILED...", err);
    });
  };

  return (
    <div className="contactus-wrapper">
      <Image
        src={ContactUS}
        alt="Contact Banner"
        preview={false}
        width="100%"
        height={400}
        style={{ objectFit: "cover" }}
      />

      <div className="contactus-content">
        <Title level={3}>Fill out the form and we'll be in touch soon!</Title>
        <Title level={1}>How can we help you?</Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          style={{ marginTop: 40, maxWidth: 1000, marginInline: "auto" }}
        >
          <Row gutter={24}>
            <Col xs={12} md={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
            <Col xs={12} md={12}>
              <Form.Item
                name="company"
                label="Company Name"
                rules={[{ required: true, message: "Please enter your company name" }]}
              >
                <Input placeholder="Company Name" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col xs={12} md={12}>
              <Form.Item
                name="email"
                label="Email Address"
                rules={[{ type: "email", required: true, message: "Enter a valid email" }]}
              >
                <Input placeholder="Email Address*" />
              </Form.Item>
            </Col>
            <Col xs={12} md={12}>
              <Form.Item
                name="address"
                label="Address"
                rules={[{ required: true, message: "Please enter your address" }]}
              >
                <Input placeholder="Address*" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col xs={12} md={12}>
              <Form.Item
                name="phone"
                label="Mobile Number"
                rules={[{ required: true, message: "Please enter your phone number" }]}
              >
                <Input placeholder="Your Mobile Number" />
              </Form.Item>
            </Col>
            <Col xs={12} md={12}>
              <Form.Item
                name="city"
                label="City"
                rules={[{ required: true, message: "Please enter your city" }]}
              >
                <Input placeholder="City*" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col xs={12} md={12}>
              <Form.Item name="zipcode" label="Zipcode">
                <Input placeholder="Zipcode*" />
              </Form.Item>
            </Col>
            <Col xs={12} md={12}>
              <Form.Item name="state" label="State">
                <Input placeholder="State*" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="description"
            label={<Title level={6}>Description</Title>}
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <TextArea rows={8} placeholder="Describe Your Message" />
          </Form.Item>

          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Button type="primary" size="large" htmlType="submit">
              Send
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
