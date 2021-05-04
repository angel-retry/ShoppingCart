import { useContext } from "react";
import { Link } from "react-router-dom";
import { SET_PAGE_CONTENT, SET_NAVBAR_ACTIVEITEM } from "../utils/constants"
import { StoreContext } from "../store"
import products from "../json/products.json";
import motherday from "../json/motherday.json";

export default function ProductNavItem (props){
    const { children, to, className, activeClassName } = props
    const { state, dispatch } = useContext(StoreContext);
    const getJSON = url => {
        switch (url) {
           case "/motherday":
              return motherday;
        }
    };
    const onClick = () => {
        console.log(children)
        dispatch({
            type: SET_PAGE_CONTENT, 
            payload: getJSON(to),
        });
        dispatch({
            type: SET_NAVBAR_ACTIVEITEM, 
            payload: to,
        });
    };
    return (
        <Link to={to}>
           <div
              onClick={onClick}
              className={`
              ${className} 
              ${state.ProductNavBar.activeItem === to ? activeClassName : ""}`}
           >
              {children}
           </div>
        </Link>
  
     );
}

