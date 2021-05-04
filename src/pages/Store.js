
import { useContext } from "react"; 
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import ProductNavBar from "../components/ProductNavBar"
import { StoreContext } from "../store"
const { Header, Content, Footer } = Layout;

function Store() {
  const { state: { page: {products} } } = useContext(StoreContext);
  return (
    <Layout className="bg-white">
      <Header className="layout-header">
        <AppHeader/>
      </Header>
      <Content className="layout-content container">
        <ProductNavBar />
        <ProductList products={products}/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer> 
    </Layout>

  );
}

export default Store;
