const express = require('express');
const cors = require('cors');


const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());















app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

