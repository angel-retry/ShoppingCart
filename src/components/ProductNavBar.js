import ProductNavItem from "./ProductNavItem"

export default function ProductNavBar() {
    return (
      <div className="product-nav-bar">
        <ProductNavItem to="/motherday" className="product-nav-item" activeClassName="product-nav-item--active">
          母親節專區
        </ProductNavItem>
        <ProductNavItem to="/sale" className="product-nav-item" activeClassName="product-nav-item--active">
          優惠組合
        </ProductNavItem>
        <ProductNavItem to="/egg" className="product-nav-item" activeClassName="product-nav-item--active">
          蛋奶素專區
        </ProductNavItem>
        <ProductNavItem to="/cake" className="product-nav-item" activeClassName="product-nav-item--active"> 
          8吋蛋糕專區
        </ProductNavItem>
        <ProductNavItem to="/jelly" className="product-nav-item" activeClassName="product-nav-item--active"> 
          果凍禮盒
        </ProductNavItem>
      </div>
    );
  }