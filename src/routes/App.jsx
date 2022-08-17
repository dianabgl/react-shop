import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import NewPassword from '../pages/NewPassword';
import RecoveryPassword from '../pages/RecoveryPassword';
import CreateAccount from '../pages/CreateAccount';
import MyAccount from '../pages/MyAccount';
import Checkout from '../pages/Checkout';
import Orders from '../containers/Orders';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/global.css';


const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
    <BrowserRouter basename="/react-shop">
      <Layout>
        <Routes>        
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/new-password" element={<NewPassword />}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword />}/>
          <Route exact path="/create-account" element={<CreateAccount />}/>
          <Route exact path="/my-account" element={<MyAccount />}/>
          <Route exact path="/checkout" element={<Checkout />}/>
          <Route exact path="/orders" element={<Orders />}/>          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>    
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;