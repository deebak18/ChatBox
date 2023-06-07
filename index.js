const express = require("express");
const cors = require("cors");
const axios = require("axios");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/login", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name:username},
        {headers:{"private-key": process.env.PRIVATE_KEY}}
        )
        return res.status(r.status).json(r.data);
  }catch(e){
    console.log(e);
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);