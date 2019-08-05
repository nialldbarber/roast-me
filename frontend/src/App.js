import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import AddStore from './pages/add-store';
import StoreList from './pages/store-list';
import Store from './pages/store';
import Login from './pages/login';
import './styles/sass/main.scss';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={StoreList} />
      <Route path="/add-store" component={AddStore} />
      <Route path="/store/:id" exact component={Store} />
      <Route path="/login" exact component={Login} />
    </Router>
  );
}
