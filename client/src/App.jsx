import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import axios from 'axios';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [tokenExpTime, setTokenExpTime] = useState(localStorage.getItem('tokenExpTime'));
  useEffect(() => {
    const genToken = async () => {
      const companyDetails = {
        "companyName": "goMart",
        "clientID": "8b926ee1-c960-404e-991e-225824dd4b5f",
        "clientSecret": "hFCDbTTGKwClPvit",
        "ownerName": "Nilesh",
        "ownerEmail": "21it3021@rgipt.ac.in",
        "rollNo": "21it3021"
      };
      if (localStorage.getItem('token') == null || tokenExpirationTime < Date.now()) {
        const { accessToken, tokenExpirationTime } = await genAccessToken(companyDetails);
        setToken(accessToken);
        setTokenExpTime(tokenExpirationTime);
        localStorage.setItem("token", accessToken);
        localStorage.setItem("tokenExpTime", tokenExpirationTime);
      }
    }
    genToken();
  }, [token]);

  const genAccessToken = async (companyDetails) => {
    const response = await axios.post('http://20.244.56.144/test/auth', companyDetails);
    let accessToken = response.data.access_token;
    let tokenExpirationTime = response.data.expires_in;

    return {
      accessToken,
      tokenExpirationTime
    }
  }


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;