import { Modal, Button, Select } from "antd";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store"
import { addCartItem, removeCartItem, setProductDetail } from "../actions";
const { Option } = Select;

export default function CartModal({isModalVisible, toggleModal}) {
   const { state: { cartItems }, dispatch } = useContext(StoreContext);
   const handleCancel = () => toggleModal(!isModalVisible);
   
   const getTotalPrice = () => {
      return (cartItems.length > 0) ?
         cartItems.reduce((sum, item) => sum + item.discount * item.qty, 0)
         : 0;
   }

   useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
   }, [cartItems])

   return (
      <div className="cart-modal-content">
         {cartItems.length === 0 ? (
               <div>購物車是空的喔!</div>
            ) : (
               cartItems.map(item => (
                  <li key={item.id} className="cart-item">
                     <Link to={`/product/${item.id}`}>
                        <div div className="cart-image" onClick={()=>{
                           setProductDetail(dispatch, item.id, item.qty);
                           handleCancel();
                        }}>
                           <img src={item.image} alt={item.name} />
                        </div>
                     </Link>

                     <div className="cart-item-content">
                        <div className="cart-name">{item.name}</div>
                        <div className="product-qty">
                           數量: {"   "}
                           <Select
                              defaultValue={item.qty}
                              className="select-style"
                              onChange={(qty) => addCartItem(dispatch, item, qty)}
                           >
                              {[...Array(item.countInStock).keys()].map((x) => (
                                 <Option key={x + 1} value={x + 1}>
                                    {x + 1}
                                 </Option>
                              ))}
                           </Select>
                        </div>
                     </div>
                     <div className="cart-item-end">
                        <div className="cart-price">
                           ${item.discount * item.qty}    
                        </div>
                        <div className="cart-item-delete" onClick={()=>removeCartItem(dispatch, item.id)}>
                           x
                        </div>
                     </div>
                  </li>
               ))
            )}
            <div className="cart-total-price-wrap">
            總價:
               <div className="cart-total-price">${getTotalPrice()}</div>
            </div>
            <Button 
               className="cart-modal-btn" 
               type="primary"
            >
               <span >去結帳!</span>
            </Button>
      </div>    
   );
}