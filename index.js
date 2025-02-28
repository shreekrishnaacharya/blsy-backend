const express = require('express');
const cors = require('cors');
const app = express();

const port = 5000;
app.use(cors());
app.use(express.json());

app.post('/api/verify', (req, res) => {
  const { code } = req.body;

  if (!code || code.length !== 6 || isNaN(code) || code[5] === '7') {
    return res.status(400).json({
      error: 'Invalid code.'
    });
  }

  res.json({
    message: `Code verified`
  });
});

app.get('/', (req, res) => {
  res.send('Blys is running!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
