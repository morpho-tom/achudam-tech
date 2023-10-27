import React from "react";
import "./style.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';




const Product = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    click
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        kvaxkvadkbhdfsnio gfafgigaohsghgoev u gyggy9eagheayg yagang
                    </div>
                </Collapse>
            </div>
        </>
    )
};


export default Product;