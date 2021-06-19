import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from 'react-router-dom';

import {
  Login, Register, Profile, Products, Checkout, OrderDetails, Chat, Orders,
  AdminProfile, AdminOrders, AdminOrderDetails, AdminAllChats, AdminChat,
  NotFound, Error } from './pages';
import { ProtectedRoute } from './components';

import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/profile" component={ Profile } />
        <ProtectedRoute path="/products" component={ Products } />
        <ProtectedRoute path="/checkout" component={ Checkout } />
        <ProtectedRoute path="/orders/:id" component={ OrderDetails } />
        <ProtectedRoute path="/orders" component={ Orders } />
        <ProtectedRoute path="/chat" component={ Chat } />
        <ProtectedRoute path="/admin/profile" component={ AdminProfile } />
        <ProtectedRoute path="/admin/orders/:id" component={ AdminOrderDetails } />
        <ProtectedRoute path="/admin/orders" component={ AdminOrders } />
        <ProtectedRoute path="/admin/chats/:roomId" component={ AdminChat } />
        <ProtectedRoute path="/admin/chats" component={ AdminAllChats } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/error" component={ Error } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
