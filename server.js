let port = process.env.PORT || 3000;

const express = require('express');
const cors = require('cors');
const app = express();

app.get('/api/whoami', (req, res) => {
  console.log(req);
  res.json({"name":req.header});
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
