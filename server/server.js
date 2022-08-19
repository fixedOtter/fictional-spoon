//
// made by fixedOtter on 18.08.2022
//

const express = require('express');
const PORT = process.env.PORT || 6969;
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.send('goten boi');
});

app.listen(PORT, () => console.log(`i can hear you on port ${PORT}`));

