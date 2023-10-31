import { React, useState } from "react";
import './style.css'
import Productimg from "./productimg.jpg"
import { Row, Col } from "react-bootstrap";


const Body1 = () => {

    const [showtab, setShowtab] = useState(2);

    const handletab = (e) => {
        setShowtab(e)
    }
    return (
        <>
            <div className="product-head">
                <h2 className="product-head1"> Products</h2>
                <br />
                <ul>
                    <button onClick={() => handletab(1)} className={showtab === 1 ? "product-topic" : "product-topic"}>chemical</button>
                    <button className="product-topic" >physics</button>
                    <button className="product-topic" >maths </button>
                </ul>
            </div>
            <div >
                <Row>
                    <Col xs={5}>
                        <img src={Productimg} className="image-responsive" alt="product-imgs" />
                    </Col>
                    <Col><p className="product-science-para">at FlowParserMixin.parseMaybeAssign (C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:10602:21)
                        at FlowParserMixin.parseMaybeAssign (C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:5760:18)    at FlowParserMixin.parseExpressionBase (C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:10556:23)
                        at C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:10552:39
                        at FlowParserMixin.allowInAnd (C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:12284:16)
                        at FlowParserMixin.parseExpression (C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:10552:17)    at FlowParserMixin.parseReturnStatement (C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:13008:28)</p></Col>
                </Row>

            </div>
            <div >
                <Row>
                    <Col xs={5}>
                        <img src={Productimg} className="image-responsive" alt="product-imgs" />
                    </Col>
                    <Col><p className="product-science-para">2at FlowParserMixin.parseMaybeAssign (C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:10602:21)
                        at FlowParserMixin.parseMaybeAssign (C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:5760:18)    at FlowParserMixin.parseExpressionBase (C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:10556:23)
                        at C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:10552:39
                        at FlowParserMixin.allowInAnd (C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:12284:16)
                        at FlowParserMixin.parseExpression (C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:10552:17)    at FlowParserMixin.parseReturnStatement (C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:13008:28)</p></Col>
                </Row>

            </div>
            <div >
                <Row>
                    <Col xs={5}>
                        <img src={Productimg} className="image-responsive" alt="product-imgs" />
                    </Col>
                    <Col><p className="product-science-para">3at FlowParserMixin.parseMaybeAssign (C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:10602:21)
                        at FlowParserMixin.parseMaybeAssign (C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:5760:18)    at FlowParserMixin.parseExpressionBase (C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:10556:23)
                        at C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:10552:39
                        at FlowParserMixin.allowInAnd (C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:12284:16)
                        at FlowParserMixin.parseExpression (C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:10552:17)    at FlowParserMixin.parseReturnStatement (C:\Users\Morpho-Tom\Documents\achudam-tech\node_modules\@babel\parser\lib\index.js:13008:28)</p></Col>
                </Row>

            </div>
        </>
    )
}


export default (Body1);