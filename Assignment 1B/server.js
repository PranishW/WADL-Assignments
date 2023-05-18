const express = require('express');
var cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

var data = {
    firstName:"",
    Email:"",
    age:""
}
app.get("/",(req,res)=>{
    res.status(200).json(data);
})
app.post("/", (req, res) => {
    const userData = req.body
    data = userData;
    res.status(200).json(data);
});
app.listen(3000, () => {
    console.log("http://localhost:3000")
});