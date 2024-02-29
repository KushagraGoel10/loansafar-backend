const express = require ("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();                                       

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password : "",
    database: "signup"
})


app.post('/signup', (req,res) => {
    const sql = "INSERT INTO login1 (name, email, number, password, pancard, expectedLoan ) VALUES (?)";
    const values = [

        req.body.expectedLoan,
        req.body.name,
        req.body.number,
        req.body.pancard,
        req.body.email,
        
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
           return res.json({ success: false, message: "Error in signup" });
        }
       db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })

      
    });

    


});



app.listen(8081, ()=>{
    console.log("listening");
})