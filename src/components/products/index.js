import React from "react";
import "./style.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';





const Product = () => {

    return (
        <>
            <div>
                <img src="" alt="" />
            </div>

            <div className="products-page-tab-head">
            
                <Tabs
                    defaultActiveKey="home"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    
                        <Tab eventKey="home" title="Proton Exchange Membrane ( PEM ) Fuel Cell">
                            <div >
                                <ol>
                                    <li>Fuel cell Stacks ( Open Cathode, Humidified)</li>
                                    <li>Fuel Cell Test Station ( Open cathode stack, Humidified Stack)</li>
                                    <li>Open Cathode PEM Fuel cell based Hydrogen Management System</li>
                                    <li>Fuel Cell components</li>
                                    <ul>
                                        <li> 7.1 Membrane Electrode assembly (MEA)</li>
                                        <li>7.2 Fuel Cell Catalyst</li>
                                        <li>7.3 Monopolar & Bipolar Plates</li>
                                        <li>7.4 Component Fuel Cell voltage/ Temperature monitoring system for Fuel Cell stacks</li>
                                        <li> 7.5 Programmable Logic Controller (PLC) based control instrumentation for PEM Fuel Cells</li>
                                    </ul>
                                </ol>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Bioreactors">
                            <div >
                                <ol>
                                    <li>Fully Automated Bioreactors for Research application</li>
                                    <li> Components for Bioreactors</li>
                                    <ul>
                                        <li>Stainless steel feed pump </li>
                                        <li>Motorised Stirrer</li>
                                        <li>pH Monitoring system in real time for feed sludge</li>
                                        <li>Temperature control system with external heating of Reactor</li>
                                        <li>Sludge level indicators and level control system</li>
                                        <li>Bio gas pressure monitoring, biogas flow measurement and control system</li>
                                        <li>Sludge temperature sensors</li>

                                    </ul>
                                </ol>
                            </div>
                        </Tab>
                        <Tab eventKey="contact" title="Sensors" >
                            <div >
                            <ul>
                                <li> Hydrogen (%,ppm)</li>
                                <li> Oxygen (%,ppm)</li>
                                <li> Carbon dioxide (%,ppm)</li>
                                <li> pH ( Industrial Grade 0-14 )</li>
                                <li> Temperature ( Thermocouple, Pt-100, Pt-1000)</li>
                                <li> Pressure</li>
                                <li> Flow rate (gases)</li>
                                <li> Level Sensors</li>
                            </ul>
                            </div>   
                        </Tab>
                        <Tab eventKey="Research" title="Research Equipments (Customised)" >
                            <div  >
                                <li> Automated Aerosol Sampler</li>
                                <li>  Sedimentation rate measurement system for gases</li>
                            </div>
                        </Tab>
                        <Tab eventKey="longer-tab" title="Supercritical extraction system for Research Application">
                            <div  >
                                <li>Compact Supercritical extraction system for research application</li>
                            </div>
                        </Tab>
                </Tabs>
              
            </div>
        </>
    )
};


export default Product;