import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


const uri =
  "mongodb+srv://harsh:account-hub@cluster0.tratldd.mongodb.net/?retryWrites=true&w=majority"; 
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB connected")
}).catch((error) => {
    console.log("Error connecting to database:", error)
})

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    age: Number,
    mobileNo: Number,
    password: String

})

const User = new mongoose.model("User", userSchema)

// Middleware function to check if user is logged in
const isLoggedIn = (req, res, next) => {
    if (req.session && req.session.user) {
      // User is logged in
      next();
    } else {
      // User is not logged in
      res.redirect("/login");
    }
  };
  

//routes
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login successful", user });
        } else {
          res.send({ message: "Password incorrect" });
        }
      } else {
        res.send({ message: "User not found" });
      }
    } catch (err) {
      res.send({ message: err.message });
    }
  });
  

app.post("/Signup", async (req, res) => {
    const { firstName, lastName, email, age, mobileNo, password } = req.body;
  
    try {
      const user = await User.findOne({
         email: email });
  
      if (user) {
        res.send({ message: "User already registered" });
      } else {
        const newUser = new User({
          firstName,
          lastName,
          email,
          age,
          mobileNo,
          password
        });
        await newUser.save();
        res.send({ message: "Successfully registered" });
        
      }
    } catch (err) {
      res.send({ message: err.message });
    }
  });
  


  

  

app.listen(9002,() => {
    console.log("BE started at port 9002")
})
