const express = require('express');
const data = require("./fakeData.json")
const app = express();

app.get("/", (req,res) => {
	res.send("salom hammaga")
})

app.get("/talaba", (req,res) => {
	res.send(data)
})


const port = 3000;

app.listen(port, () => console.log("listen on port http:localhost:"+port))