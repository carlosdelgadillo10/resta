const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/restar', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'num1 and num2 must be numbers' });
    }
    const resultado = num1 - num2;
    res.json({ resultado });
});

const port = 8004;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});