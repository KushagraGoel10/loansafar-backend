const express = require("express")
const mongoose = require ('mongoose')
const cors = require("cors")
const UserModel = require ('./models/User')

const app = express ()
app.use (express.json())
app.use (cors())


mongoose.connect("mongodb+srv://kushagra:loansafar123@loansafar.xtsozrq.mongodb.net/loansafartest?retryWrites=true&w=majority&appName=LoanSafar", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,  // Add this line
});

app.post('/details', (req, res) => {
        UserModel.create(req.body)
        .then (users => res.json(users))
        .catch (err => res.json (err))
})



app.listen(3001, ()=>{
    console.log("server is running :p")
} )

