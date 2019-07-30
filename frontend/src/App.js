import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import AddStore from './components/add-store';
import StoreList from './components/store-list';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={StoreList} />
      <Route path="/add-store" exact component={AddStore} />
    </Router>
  );
}
