
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import products from "../json/products.json"
import CartModal from '../components/CartModal';

const { Header, Content, Footer } = Layout;

function Product({ match }) {
  const product = products.find(
    x => x.id === match.params.productId
  );
  return (
    <Layout className="bg-white">
      <Header className="layout-header">
        <AppHeader/>
      </Header>
      <Content className="layout-content container">
        <CartModal />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer> 
    </Layout>
  );
}

export default Product;
