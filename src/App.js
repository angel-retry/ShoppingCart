import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Store from './pages/Store'
import Product from './pages/Product'
import ShoppingCart from './pages/ShoppingCart'

import { StoreProvider } from "./store";
function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Store} />
          <Route path="/ShoppingCart" component={ShoppingCart} />
          <Route exact path="/:pageName" component={Store} />
          <Route path="/product/:productId" component={Product} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>

  );
}

export default App;
