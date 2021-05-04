import { Link } from "react-router-dom"
import CartSummary from "./CartSummary"
export default function Header() {
   return (
      <div className="header container">
         <div className="header-logo">
            <Link to="/">
               <img src="https://i.ibb.co/T8hdxJn/img-logo.png" />
            </Link>
         </div>
         <CartSummary />
      </div>
   );
}