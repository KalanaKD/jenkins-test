const express = require('express');
const { add } = require('./math');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from Jenkins CI/CD demo app!');
});

app.get('/add/:a/:b', (req, res) => {
    const result = add(Number(req.params.a), Number(req.params.b));
    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});