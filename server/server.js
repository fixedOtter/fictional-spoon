//
// made by fixedOtter on 18.08.2022
//

const express = require('express');
const PORT = process.env.PORT || 6969;
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/test', (req, res) => {
  res.send({
    text: 'i am talking to you from the backend boii'
  });
});

app.listen(PORT, () => console.log(`i can hear you on port ${PORT}`));

