const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/login", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name:username},
        {headers:{"private-key": "1fe68e24-aba3-4330-be68-bafbbfe47f6d"}}
        )
        return res.status(r.status).json(r.data);
  }catch(e){
    console.log(e);
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);