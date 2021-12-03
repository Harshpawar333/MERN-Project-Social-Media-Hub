import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { useState } from 'react'

function Login() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState(false)
  const [passwordErr, setPasswordErr] = useState(false)
  const [passwordInput, setPasswordInput] = useState('password')
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(false)
  function handleLogin(){
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (email.match(mailformat)) {
        setEmailErr(false)
      } else {
        setEmailErr(true)
      }
      if (password.length < 8) {
        setPasswordErr(true)
      } else {
        setPasswordErr(false)
      }
  }
  return (
    <body>
      <div className="login">
        <div className="container customContainer text-left">
          <nav class="navbar navbar-light bg-light">
            <div class="container">
              <a class="navbar-brand" href="#">
                <img
                  src="https://image.freepik.com/free-vector/golden-elegant-logo-flat-style_52683-17266.jpg"
                  alt=""
                  width="90"
                  height="80"
                />
              </a>
            </div>
          </nav>
          <div class="py-4 pt-0 row">
            <div class="col-sm-9">
              <input
                type="text"
                minlength="8"
                required
                class="form-control"
                placeholder="Email Addresss or Phone Number"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {emailErr && (
                  <span className="text-danger text-left posAbsolute">
                    Invalid email Address
                  </span>
                )}
            </div>
          </div>
          <div class="py-4 pt-0 row">
            <div class="col-sm-9">
              <input
                type="password"
                minlength="8"
                required
                class="form-control"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {passwordErr && (
                  <span className="text-danger text-left posAbsolute">
                    Invalid Password
                  </span>)}
            </div>
          </div>
          <button type="button" class="btn btn-primary" onClick={handleLogin}>
            Log In
          </button>
        </div>
      </div>
    </body>
  )
}
export default Login
