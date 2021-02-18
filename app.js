const express = require('express');
const path = require('path');
const app = express();
const RateLimit = require('express-rate-limit');


if(process.env.NODE_ENV === 'production') {
  const limit = new RateLimit({
    windowMs: 1*60*1000,
    max: 128
  });

  app.use(limit);

  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
  });
}

app.listen(5000, () => {
  console.log('App listening on port 5000!')
})