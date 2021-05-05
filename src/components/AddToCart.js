import { useEffect, useContext } from "react";
import { Button, notification } from "antd"
import { StoreContext } from "../store"
import { addCartItem } from "../actions";

export default function AddToCart() {
    const { state: { cartItems, productDetail: { product, qty } }, dispatch } = useContext(StoreContext);
    
    const openNotification = () => {
        notification.open({
          message: '購物通知',
          description:
            `${qty} 個 ${product.name} 已經加入購物車!`,
          onClick: () => {
            console.log('Notification Clicked!');
          },
          placement: 'bottomRight'
        });
      };

      const addToCart = () => {
        openNotification();
        addCartItem(dispatch, product, qty);
      };

      useEffect(()=>{
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }, [cartItems])

    return (
      <Button type="primary" className="btn-tocar" onClick={addToCart}>
        加入購物車
      </Button>
    );
  }