import { useState } from 'react'
import './App.css'

function Login() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState(false)
  const [passwordErr, setPasswordErr] = useState(false)
  const [passwordInput, setPasswordInput] = useState('password')
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(false)
  function handleLogin() {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (email.match(mailformat)) {
      setEmailErr(false)
    } else {
      setEmailErr(true)
    }
    if (password === '') {
      setPasswordErr(true)
    } else {
      setPasswordErr(false)
    }
    if (email.match(mailformat) && password !== '') {
      window.location.href = '/'
    }
  }
  return (
    <body id="login">
      <div className="login">
        <div id="middlebox" className="container customContainer text-left">
          <div>
            <a class="navbar-brand" href="#">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                width="90"
                height="80"
              />
            </a>
          </div>

          <div class="py-4 pt-0 row">
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                placeholder="Email Address"
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
                class="form-control"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {passwordErr && (
                <span className="text-danger text-left posAbsolute">
                  Invalid Password
                </span>
              )}
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
