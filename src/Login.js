import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Login() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  // const [loggedIn, setLoggedIn] = useState(false);
  // hey

  function handleChangeEmail(event) {
    setEmail(event.target.value)
  }

  function handleChangePassword(event) {
    setPassword(event.target.value)
  }

  function handleLogin() {
    axios.post("https://mern-project-social-media-hub.onrender.com/login", { email, password })
    .then( res =>  {
      toast(res.data.message);
      if (res.data.message === "Login successful") {
        setTimeout(() => {
          window.location.href = "/LoggedIn";
        }, 800); 
      }
    })
  }

  return (
    <body id="login">
      <div className="login">
        <div id="middlebox" className="container customContainer text-left">
          <div>
            <a className="navbar-brand" href="https://example.com">
              <img className='backlogin'
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                width="90"
                height="80"
              />
            </a>
          </div>

          <div className="py-4 pt-0 row">
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                placeholder="Email Address"
                value={email}
                name="email"
                onChange={handleChangeEmail}
              />
            </div>
          </div>

          <div className="py-4 pt-0 row">
            <div className="col-sm-9">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                name="password"
                onChange={handleChangePassword}
              />
            </div>
          </div>

          <button type="button" className="btn btn-primary btnsize" onClick={handleLogin}>
            Log In
          </button>
        </div>
      </div>
    </body>
  )
}

export default Login
