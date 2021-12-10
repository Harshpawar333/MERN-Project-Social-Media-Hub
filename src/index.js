import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// import './App.css';
import Signup from './Signup'
import Login from './Login'
import GroceryApp from './GroceryApp'
import Header from './Header'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<GroceryApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    {<Header />}
  </React.StrictMode>,
  document.getElementById('root'),
)
