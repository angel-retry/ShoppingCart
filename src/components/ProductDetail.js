import { useContext } from "react";
import { Row, Col } from "antd";
import { Select } from "antd";
import AddToCart from "./AddToCart"
import { StoreContext } from "../store"
import { setProductDetail } from "../actions";

const { Option } = Select;

export default function ProductDetail() {
    const { state: { productDetail: { product, qty} }, dispatch } = useContext(StoreContext);

    return (
        <Row  gutter={[32, 32]}>
            <Col lg={{ span: 10, offset: 1 }}>
            <img 
                alt=""
                className="product-image"
                src={product.image}
            />
            </Col>
            <Col lg={{ span: 12 }}>
                <div className="product-info--detail">
                    <h3 className="product-name product-name--large">
                        {product.name}
                    </h3>
                    <div className="product-price-wrap">
                        <p className="p-black product-price product-price--large">
                            NT {product.price}
                        </p>
                        <p className="p-red product-price product-price--large">
                            NT {product.discount}
                        </p>
                        <p className="product-qty">
                            數量: {"   "}
                            <Select
                                defaultValue={qty} 
                                value={qty}
                                className="select-style"
                                onChange={val=>setProductDetail(dispatch, product.id, val)}
                            >
                                {[...Array(product.countInStock).keys()].map((x) => (
                                    <Option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </Option>
                                ))}
                            </Select>
                        </p>
                        <p>
                            總價格: {product.discount * qty}
                        </p>
                        <AddToCart  />
                    </div>
                </div>
            </Col>
        </Row>


    );
  }
  