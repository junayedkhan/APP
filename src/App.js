import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import './App.css';
import ProductListing from './component/products/ProductListing';
import ProductDetails from './component/products/ProductDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="">
          <Switch>
            <Route exact path="/" component={ProductListing} />
            <Route exact path="/product/:productID" component={ProductDetails} />
            <Route path="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
