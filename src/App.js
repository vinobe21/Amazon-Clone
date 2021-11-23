import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './Stateprovider';
import Payment from './Payment';

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //run once when components runs
    auth.onAuthStateChanged(authUser => {
      console.log("user is", authUser);

      if (authUser) {
        //User is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <div className="app">
      <Router>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout" >
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment" >
            <Header />
            <Payment />
          </Route>
          <Route exact path="/" >
            <Header />
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>

  );
}

export default App;
