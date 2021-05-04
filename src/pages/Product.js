
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import { useContext } from "react";
import { StoreContext } from "../store"
const { Header, Content, Footer } = Layout;

function Product() {
  const { state: { page: { products } } } = useContext(StoreContext);
  return (
    <Layout className="bg-white">
      <Header className="layout-header">
        <AppHeader/>
      </Header>
      <Content className="layout-content container">
        <ProductDetail products = {products} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer> 
    </Layout>
  );
}

export default Product;
