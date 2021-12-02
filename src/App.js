import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [ageErr, setAgeErr] = useState(false);
  const [mobileNumberErr, setMobileNumberErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  function handleSubmit() {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (firstName === '') { 
      setFirstNameErr(true);
    } else {
      setFirstNameErr(false)
    }
    if (lastName === '') {
      setLastNameErr(true)
    } else {
      setLastNameErr(false)
    }
    if (email.match(mailformat)) {
      setEmailErr(false);
    } else {
      setEmailErr(true)
    }
    if (age === '') {
      setAgeErr(true)
    } else {
      setAgeErr(false)
    }
    if (mobileNumber.length!==10) {
      setMobileNumberErr(true)
    } else {
      setMobileNumberErr(false)
    }
    if (password.length <8) {
      setPasswordErr(true)
    } else {
      setPasswordErr(false)
    }
  }
  return (
    <div className="app">
      <div className="container customContainer text-left">
        <h1 className="text-center">Signup Form</h1>
        <div class="py-4 pt-0 row">
          <label for="inputPassword" class="col-sm-3 col-form-label">
            First Name
          </label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="inputPassword"
              placeholder="First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            {firstNameErr && <span className="text-danger text-left posAbsolute" >invalid first name</span>}
          </div>
        </div>
        <div class="py-4 pt-0 row">
          <label for="inputPassword" class="col-sm-3 col-form-label">
            Last Name
          </label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="inputPassword"
              placeholder="Last Name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            {lastNameErr && <span className="text-danger text-left posAbsolute">invalid last name</span>}
          </div>
        </div>
        <div class="py-4 pt-0 row">
          <label for="inputPassword" class="col-sm-3 col-form-label">
            Email Address
          </label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="inputPassword"
              placeholder="email@abc.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {emailErr && <span className="text-danger text-left posAbsolute">invalid email Address</span>}
          </div>
        </div>
        <div class="py-4 pt-0 row">
          <label for="inputPassword" class="col-sm-3 col-form-label">
            Age
          </label>
          <div class="col-sm-9">
            <input
              type="number"
              class="form-control"
              id="inputPassword"
              placeholder="example: 50 "
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
            {ageErr && <span className="text-danger text-left posAbsolute">invalid age</span>}
          </div>
        </div>
        <div class="py-4 pt-0 row">
          <label for="inputPassword" class="col-sm-3 col-form-label">
            Mobile Number
          </label>
          <div class="col-sm-9">
            <input
              type="number"
              class="form-control"
              id="inputPassword"
              placeholder="1234567890"
              value={mobileNumber}
              onChange={(event) => setMobileNumber(event.target.value)}
            />
            {mobileNumberErr && <span className="text-danger text-left posAbsolute">invalid Mobile number</span>}
          </div>
        </div>
        <div class="py-4 pt-0 row">
          <label for="inputPassword" class="col-sm-3 col-form-label">
            Password
          </label>
          <div class="col-sm-9">
            <input
              type="password"
              minlength="8" required
              class="form-control"
              id="inputPassword"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {passwordErr && <span className="text-danger text-left posAbsolute">password strength must be greater than 8</span>}
          </div>
        </div>
        <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Signup
        </button>
        </div>
      </div>
    </div>
  )
}

export default App
