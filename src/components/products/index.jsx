// // import React, { useState } from "react";
// // import { Card, Col, Row, Modal, Typography } from "antd";
// // import "./style.css";
// // import ProductImage from "./productimage.jpg";

// // const { Meta } = Card;
// // const { Title, Paragraph } = Typography;

// // const productData = [
// //   {
// //     id: 1,
// //     title: "Bioreactors",
// //     short: "Automated Bioreactors & Components",
// //     image: ProductImage,
// //     details: (
// //       <ul>
// //         <li>Fully Automated Bioreactors for Research</li>
// //         <li>
// //           Components:
// //           <ul>
// //             <li>Feed pump, Stirrer, pH & Temp control</li>
// //             <li>Level & pressure systems</li>
// //             <li>Biogas measurement tools</li>
// //           </ul>
// //         </li>
// //       </ul>
// //     ),
// //   },
// //   {
// //     id: 2,
// //     title: "PEM Fuel Cell",
// //     short: "Proton Exchange Membrane Fuel Cell",
// //     image: ProductImage,
// //     details: (
// //       <>
// //         <ul>
// //           <li>Fuel cell Stacks (Open Cathode, Humidified)</li>
// //           <li>Fuel Cell Test Station</li>
// //           <li>Open Cathode PEM Fuel Cell based Hydrogen Management System</li>
// //           <li>
// //             Fuel Cell Components:
// //             <ul>
// //               <li>Membrane Electrode Assembly (MEA)</li>
// //               <li>Fuel Cell Catalyst</li>
// //               <li>Monopolar & Bipolar Plates</li>
// //               <li>Monitoring systems & PLC instrumentation</li>
// //             </ul>
// //           </li>
// //         </ul>
// //       </>
// //     ),
// //   },
// //   {
// //     id: 3,
// //     title: "Sensors",
// //     short: "Gas, pH, Temp, Pressure Sensors",
// //     image: ProductImage,
// //     details: (
// //       <ul>
// //         <li>Hydrogen , Oxygen, CO₂ sensors</li>
// //         <li>pH (Industrial Grade)</li>
// //         <li>Temperature, Pressure, Flow Rate</li>
// //         <li>Level Sensors</li>
// //       </ul>
// //     ),
// //   },
// //   {
// //     id: 4,
// //     title: "Research Equipments",
// //     short: "Custom-built instruments",
// //     image: ProductImage,
// //     details: (
// //       <ul>
// //         <li>Automated Aerosol Sampler</li>
// //         <li>Gas Sedimentation Rate Measurement</li>
// //       </ul>
// //     ),
// //   },
// //   {
// //     id: 5,
// //     title: "Supercritical Extractor",
// //     short: "Compact SC Extraction for Research",
// //     image: ProductImage,
// //     details: (
// //       <ul>
// //         <li>Compact Supercritical extraction system for lab use</li>
// //       </ul>
// //     ),
// //   },
// // ];

// // const Product = () => {
// //   const [visible, setVisible] = useState(false);
// //   const [selectedProduct, setSelectedProduct] = useState(null);

// //   const showModal = (product) => {
// //     setSelectedProduct(product);
// //     setVisible(true);
// //   };

// //   return (
// //     <>
// //       <div className="product-section">
// //         <Title level={2} style={{ textAlign: "center", marginBottom: 40 }}>
// //           Our Products
// //         </Title>
// //         <Row gutter={[18, 18]} justify="center">
// //           {productData.map((product) => (
// //             <Col xs={24} sm={12} md={8} lg={9} key={product.id}>
// //               <Card
// //                 hoverable
// //                 cover={<img alt={product.title} src={product.image} />}
// //                 onClick={() => showModal(product)}
// //               >
// //                 <Meta title={product.title} description={product.short} />
// //               </Card>
// //             </Col>
// //           ))}
// //         </Row>
// //       </div>

// //       {selectedProduct && (
// //         <Modal
// //           title={selectedProduct.title}
// //           open={visible}
// //           footer={null}
// //           onCancel={() => setVisible(false)}
// //         >
// //           <div style={{ padding: "10px 0" }}>
// //             <img alt={selectedProduct.title} src={selectedProduct.image} />
// //           </div>
// //           <Paragraph>{selectedProduct.details}</Paragraph>
// //         </Modal>
// //       )}
// //     </>
// //   );
// // };

// // export default Product;

// import React, { useState } from "react";
// import { Card, Col, Row, Modal, Typography, Collapse } from "antd";
// import "./style.css";
// import ProductImage from "./productimage.jpg";
// import bioReactor from "../../../public/Images/bioReactor.jpg";

// const { Panel } = Collapse;
// const { Title, Paragraph } = Typography;

// const productData = [
//   {
//     id: 1,
//     title: "Bioreactors",
//     short: "Automated Bioreactors & Components",
//     image: bioReactor,
//     details: "Fully Automated Bioreactors for Research",
//     subProducts: [
//       {
//         id: 11,
//         title: "Aerobic Reactors",
//         short: "Oxygen-based bioreactors",
//         image: ProductImage,
//         details: (
//           <ul>
//             <li>High-efficiency oxygen transfer</li>
//             <li>Precision aeration control</li>
//             <li>Ideal for microbial cultures</li>
//           </ul>
//         ),
//       },
//       {
//         id: 12,
//         title: "Anaerobic Reactors",
//         short: "Oxygen-free bioreactors",
//         image: ProductImage,
//         details: (
//           <ul>
//             <li>Complete oxygen exclusion</li>
//             <li>Specialized for methane production</li>
//             <li>Gas collection systems</li>
//           </ul>
//         ),
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Fuel Cell",
//     short: "Proton Exchange Membrane Fuel Cell",
//     image: ProductImage,
//     details: "Fuel cell technologies",
//     subProducts: [
//       {
//         id: 21,
//         title: "Components",
//         short: "Fuel cell Components",
//         image: ProductImage,
//         details: "Various stack configurations",
//       },
//       {
//         id: 22,
//         title: "Test Stations",
//         short: "Fuel cell Test Station",
//         image: ProductImage,
//         details: "Complete test solutions",
//       },
//     ],
//   },
//   // {
//   //   id: 3,
//   //   title: "Sensors",
//   //   short: "Gas, pH, Temp, Pressure Sensors",
//   //   image: ProductImage,
//   //   details: "",
//   //   subProducts: [
//   //     {
//   //       id: 31,
//   //       title: "Hydrogen Sensor",
//   //       short: "Fuel cell stacks",
//   //       image: ProductImage,
//   //       details: "Various stack configurations",
//   //     },
//   //     {
//   //       id: 32,
//   //       title: "Oxygen Sensor",
//   //       short: "Testing equipment",
//   //       image: ProductImage,
//   //       details: "Complete test solutions",
//   //     },{
//   //       id: 33,
//   //       title: "Carbon Dioxide",
//   //       short: "Testing equipment",
//   //       image: ProductImage,
//   //       details: "Complete test solutions",
//   //     },{
//   //       id: 34,
//   //       title: "Level Sensor",
//   //       short: "Testing equipment",
//   //       image: ProductImage,
//   //       details: "Complete test solutions",
//   //     },{
//   //       id: 35,
//   //       title: "Pressuer Sencor",
//   //       short: "Testing equipment",
//   //       image: ProductImage,
//   //       details: "Complete test solutions",
//   //     },{
//   //       id: 36,
//   //       title: "Tempratre Sencor",
//   //       short: "Testing equipment",
//   //       image: ProductImage,
//   //       details: "Complete test solutions",
//   //     },{
//   //       id: 37,
//   //       title: "PH Sencor",
//   //       short: "Testing equipment",
//   //       image: ProductImage,
//   //       details: "Complete test solutions",
//   //     },
//   //   ],
//   // },
//   {
//     id: 3,
//     title: "Sensors",
//     short: "Gas, pH, Temp, Pressure Sensors",
//     image: ProductImage,
//     details:
//       "High-precision sensors for various industrial and research applications",
//     subProducts: [
//       {
//         id: 31,
//         title: "Hydrogen Sensor",
//         short: "H₂ gas detection",
//         image: ProductImage,
//         details: (
//           <ul>
//             <li>Range: 0-1000 ppm</li>
//             <li>Accuracy: ±2% of reading</li>
//             <li>Response time: &lt;15 seconds</li>
//             <li>Operating temperature: -20°C to 50°C</li>
//             <li>Output: 4-20 mA / 0-10 VDC</li>
//           </ul>
//         ),
//       },
//       {
//         id: 32,
//         title: "Oxygen Sensor",
//         short: "O₂ concentration measurement",
//         image: ProductImage,
//         details: (
//           <ul>
//             <li>Range: 0-25% and 0-100%</li>
//             <li>Accuracy: ±0.1%</li>
//             <li>Long-life zirconia sensor</li>
//             <li>Auto-calibration feature</li>
//             <li>RS485 Modbus output</li>
//           </ul>
//         ),
//       },
//       {
//         id: 33,
//         title: "Carbon Dioxide Sensor",
//         short: "CO₂ monitoring",
//         image: ProductImage,
//         details: (
//           <ul>
//             <li>Range: 0-5000 ppm</li>
//             <li>NDIR technology</li>
//             <li>Accuracy: ±50 ppm ±3% of reading</li>
//             <li>Temperature compensated</li>
//             <li>Wall-mounted and duct versions</li>
//           </ul>
//         ),
//       },
//       {
//         id: 34,
//         title: "Level Sensor",
//         short: "Liquid level detection",
//         image: ProductImage,
//         details: (
//           <ul>
//             <li>Types: Ultrasonic, Capacitive, Optical</li>
//             <li>Measuring range up to 10m</li>
//             <li>Output: Analog 4-20mA / Relay</li>
//             <li>Material: SS316 / PTFE</li>
//             <li>IP68 waterproof rating</li>
//           </ul>
//         ),
//       },
//       {
//         id: 35,
//         title: "Pressure Sensor",
//         short: "Pressure measurement",
//         image: ProductImage,
//         details: (
//           <ul>
//             <li>Range: 0-10 bar up to 0-600 bar</li>
//             <li>Accuracy: ±0.25% FS</li>
//             <li>Stainless steel diaphragm</li>
//             <li>Threaded and flush diaphragm options</li>
//             <li>ATEX certified models available</li>
//           </ul>
//         ),
//       },
//       {
//         id: 36,
//         title: "Temperature Sensor",
//         short: "Precision temperature measurement",
//         image: ProductImage,
//         details: (
//           <ul>
//             <li>Types: RTD, Thermocouple, Thermistor</li>
//             <li>Range: -200°C to +1200°C</li>
//             <li>Accuracy: ±0.1°C</li>
//             <li>Various probe configurations</li>
//             <li>Explosion-proof versions available</li>
//           </ul>
//         ),
//       },
//       {
//         id: 37,
//         title: "pH Sensor",
//         short: "pH value measurement",
//         image: ProductImage,
//         details: (
//           <ul>
//             <li>Range: 0-14 pH</li>
//             <li>Accuracy: ±0.01 pH</li>
//             <li>Temperature compensation</li>
//             <li>Glass and ISFET electrode types</li>
//             <li>Industrial and laboratory grade</li>
//           </ul>
//         ),
//       },
//     ],
//   },
// ];

// const Product = () => {
//   const [visible, setVisible] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [expandedProduct, setExpandedProduct] = useState(null);

//   const showModal = (product) => {
//     setSelectedProduct(product);
//     setVisible(true);
//   };

//   const toggleExpand = (productId) => {
//     setExpandedProduct(expandedProduct === productId ? null : productId);
//   };

//   return (
//     <div className="product-section">
//       <Title level={2} style={{ textAlign: "center", marginBottom: 40 }}>
//         Our Products
//       </Title>

//       <Row gutter={[16, 16]} justify="center">
//         {productData.map((product) => (
//           <Col xs={16} sm={16} md={8} lg={8} key={product.id}>
//             <div className="product-container">
//               <Card
//                 hoverable
//                 cover={<img alt={product.title} style={{ objectFit: "contain", height: 300 }} src={product.image} />}
//                 onClick={() => toggleExpand(product.id)}
//               >
//                 <Card.Meta title={product.title} description={product.short} />
//               </Card>

//               {expandedProduct === product.id && product.subProducts && (
//                 <div className="sub-products-container">
//                   {product.subProducts.map((subProduct) => (
//                     <Card
//                       key={subProduct.id}
//                       className="sub-product-card"
//                       onClick={() => showModal(subProduct)}
//                     >
//                       <Card.Meta
//                         title={subProduct.title}
//                         description={subProduct.short}
//                       />
//                     </Card>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </Col>
//         ))}
//       </Row>

//       <Modal
//         title={selectedProduct?.title}
//         visible={visible}
//         onCancel={() => setVisible(false)}
//         footer={null}
//         width={800}
//       >
//         {selectedProduct && (
//           <div className="product-modal-content">
//             <img
//               src={selectedProduct.image}
//               alt={selectedProduct.title}
//               className="product-modal-image"
//             />
//             <div className="product-modal-details">
//               <h3>{selectedProduct.short}</h3>
//               <Paragraph>{selectedProduct.details}</Paragraph>
//             </div>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default Product;

import React, { useState } from "react";
import { Layout, Menu, Card, Typography } from "antd";
import {
  AppstoreOutlined,
  ClusterOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import "./style.css";
import ProductImage from "./productimage.jpg";
import bioReactor from "../../../public/Images/bioReactor.jpg";

const { Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

const productData = [
  {
    id: 1,
    title: "Bioreactors",
    image: bioReactor,
    details: "Fully Automated Bioreactors for Research",
    subProducts: [
      {
        id: 11,
        title: "Aerobic Reactors",
        image: ProductImage,
        details: (
          <ul>
            <li>High-efficiency oxygen transfer</li>
            <li>Precision aeration control</li>
            <li>Ideal for microbial cultures</li>
          </ul>
        ),
      },
      {
        id: 12,
        title: "Anaerobic Reactors",
        image: ProductImage,
        details: (
          <ul>
            <li>Complete oxygen exclusion</li>
            <li>Specialized for methane production</li>
            <li>Gas collection systems</li>
          </ul>
        ),
      },
    ],
  },
  {
    id: 2,
    title: "Fuel Cell",
    image: ProductImage,
    details: "Fuel cell technologies",
    subProducts: [
      {
        id: 21,
        title: "Components",
        image: ProductImage,
        details: "Various stack configurations",
      },
      {
        id: 22,
        title: "Test Stations",
        image: ProductImage,
        details: "Complete test solutions",
      },
    ],
  },
  {
    id: 3,
    title: "Sensors",
    short: "Gas, pH, Temp, Pressure Sensors",
    image: ProductImage,
    details:
      "High-precision sensors for various industrial and research applications",
    subProducts: [
      {
        id: 31,
        title: "Hydrogen Sensor",
        short: "H₂ gas detection",
        image: ProductImage,
        details: (
          <ul>
            <li>Range: 0-1000 ppm</li>
            <li>Accuracy: ±2% of reading</li>
            <li>Response time: &lt;15 seconds</li>
            <li>Operating temperature: -20°C to 50°C</li>
            <li>Output: 4-20 mA / 0-10 VDC</li>
          </ul>
        ),
      },
      {
        id: 32,
        title: "Oxygen Sensor",
        short: "O₂ concentration measurement",
        image: ProductImage,
        details: (
          <ul>
            <li>Range: 0-25% and 0-100%</li>
            <li>Accuracy: ±0.1%</li>
            <li>Long-life zirconia sensor</li>
            <li>Auto-calibration feature</li>
            <li>RS485 Modbus output</li>
          </ul>
        ),
      },
      {
        id: 33,
        title: "Carbon Dioxide Sensor",
        short: "CO₂ monitoring",
        image: ProductImage,
        details: (
          <ul>
            <li>Range: 0-5000 ppm</li>
            <li>NDIR technology</li>
            <li>Accuracy: ±50 ppm ±3% of reading</li>
            <li>Temperature compensated</li>
            <li>Wall-mounted and duct versions</li>
          </ul>
        ),
      },
      {
        id: 34,
        title: "Level Sensor",
        short: "Liquid level detection",
        image: ProductImage,
        details: (
          <ul>
            <li>Types: Ultrasonic, Capacitive, Optical</li>
            <li>Measuring range up to 10m</li>
            <li>Output: Analog 4-20mA / Relay</li>
            <li>Material: SS316 / PTFE</li>
            <li>IP68 waterproof rating</li>
          </ul>
        ),
      },
      {
        id: 35,
        title: "Pressure Sensor",
        short: "Pressure measurement",
        image: ProductImage,
        details: (
          <ul>
            <li>Range: 0-10 bar up to 0-600 bar</li>
            <li>Accuracy: ±0.25% FS</li>
            <li>Stainless steel diaphragm</li>
            <li>Threaded and flush diaphragm options</li>
            <li>ATEX certified models available</li>
          </ul>
        ),
      },
      {
        id: 36,
        title: "Temperature Sensor",
        short: "Precision temperature measurement",
        image: ProductImage,
        details: (
          <ul>
            <li>Types: RTD, Thermocouple, Thermistor</li>
            <li>Range: -200°C to +1200°C</li>
            <li>Accuracy: ±0.1°C</li>
            <li>Various probe configurations</li>
            <li>Explosion-proof versions available</li>
          </ul>
        ),
      },
      {
        id: 37,
        title: "pH Sensor",
        short: "pH value measurement",
        image: ProductImage,
        details: (
          <ul>
            <li>Range: 0-14 pH</li>
            <li>Accuracy: ±0.01 pH</li>
            <li>Temperature compensation</li>
            <li>Glass and ISFET electrode types</li>
            <li>Industrial and laboratory grade</li>
          </ul>
        ),
      },
    ],
  },
  {
    id: 4,
    title: "Robotics Arm",
    image: bioReactor,
    details: "Fully Automated Bioreactors for Research",
  },
  {
    id: 5,
    title: "Automated motorised stirrer",
    image: bioReactor,
    details: "Fully Automated Bioreactors for Research",
  },
  {
    id: 6,
    title: "Customized Research Equipment",
    image: bioReactor,
    details: "Fully Automated Bioreactors for Research",
  },
];

const ProductSidebarView = () => {
  const [selected, setSelected] = useState(productData[0]);
  const [openKeys, setOpenKeys] = useState([]);

  const handleMenuClick = (productId, subProductId = null) => {
    const mainProduct = productData.find((p) => p.id === productId);
    if (subProductId) {
      const subProduct = mainProduct.subProducts.find(
        (sp) => sp.id === subProductId
      );
      setSelected({ ...subProduct, parentTitle: mainProduct.title });
    } else {
      setSelected(mainProduct);
    }
  };

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key));
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={300}
        className="sidebar"
        theme="light"
        style={{ backgroundColor: "transparent" }}
      >
        <Title level={3} style={{ textAlign: "center", padding: "16px" }}>
          Products
        </Title>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ backgroundColor: "transparent" }}
        >
          {productData.map((product) => (
            <Menu.SubMenu
              key={product.id}
              icon={<AppstoreOutlined />}
              title={product.title}
            >
              <Menu.Item
                key={`product-${product.id}`}
                icon={<InfoCircleOutlined />}
                onClick={() => handleMenuClick(product.id)}
              >
                {product.title}
              </Menu.Item>
              {product.subProducts?.map((sub) => (
                <Menu.Item
                  key={`sub-${sub.id}`}
                  icon={<ClusterOutlined />}
                  onClick={() => handleMenuClick(product.id, sub.id)}
                >
                  {sub.title}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu>
      </Sider>

      <Layout style={{ padding: "24px" }}>
        <Content>
          <Card
            title={
              selected.parentTitle
                ? `${selected.parentTitle} - ${selected.title}`
                : selected.title
            }
            bordered={false}
            style={{ width: "100%" }}
          >
            <img
              src={selected.image}
              alt={selected.title}
              style={{
                maxHeight: "300px",
                objectFit: "contain",
                width: "100%",
                marginBottom: "16px",
              }}
            />
            <Paragraph>{selected.details}</Paragraph>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProductSidebarView;
