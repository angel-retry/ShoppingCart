import { Card } from "antd"
import { Link } from 'react-router-dom';

export default function ProductItem( { product }) {
    return (
        <Card className="product">
            <Link to={`/product/${product.id}`}>
                    <img 
                        style={{width: '100%'}}
                        src={product.image}
                        alt={product.name} />
            </Link>
            <div className="product-info">
                <h3 className="product-name">
                    {product.name}
                </h3>
                <div className="product-price">
                    <p>
                        NT {product.price}
                    </p>
                    <p className="p-red">
                        NT {product.discount}
                    </p>
                </div>
            </div>
        </Card>
    );
  }
  