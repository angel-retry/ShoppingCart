import { useContext, useEffect } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import { StoreContext } from "../store"
import { setProductDetail } from "../actions";

const { Header, Content, Footer } = Layout;

function Product({ match }) {
  const { dispatch } = useContext(StoreContext);   
  useEffect(() => setProductDetail(dispatch, match.params.productId, 0),[])
  
  return (
    <Layout className="bg-white">
      <Header className="layout-header">
        <AppHeader/>
      </Header>
      <Content className="layout-content container">
        <ProductDetail  />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer> 
    </Layout>
  );
}

export default Product;
