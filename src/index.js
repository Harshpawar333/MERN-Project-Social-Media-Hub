import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// import './App.css';
import Signup from './Signup'
import Login from './Login'
import LoggedIn from './LoggedIn'
import Header from './Header'
import LoginSignup from './loginsignup'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/LoggedIn" element={<LoggedIn />} />
      </Routes>
    </Router>
    {<Header />}
  </React.StrictMode>,
  document.getElementById('root'),
)


