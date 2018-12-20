let port = process.env.PORT || 3000;

const express = require('express');
const cors = require('cors');
const app = express();

app.get('/api/whoami', (req, res) => {
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.json({
    "ipaddress": ip,
    "language": req.headers['accept-language'],
    "software": req.headers['user-agent']
  });
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
