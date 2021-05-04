import { useState, useContext } from "react";
import { Badge } from "antd";
import { CartIcon } from "./Icons";
import { StoreContext } from "../store"
import { Link } from "react-router-dom";

export default function CartSummary() {
    const { state: { cartItems } } = useContext(StoreContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => setIsModalVisible(!isModalVisible);
    
    const count = (cartItems.length > 0) ?
        cartItems.reduce((sum, item) => sum + item.qty, 0)
        : 0;

    return (
        <>
            <Link to="/ShoppingCart" className="header-cart-summary">
                    <Badge count={ count } style={{ color: 'white', backgroundColor: '#A34B00'}}>
                    <CartIcon size={32}/>
                    </Badge> 
                    <p className="cart-summary-text"> 購物車 </p>                   
            </Link>
        </>
      );
}