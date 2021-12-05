const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/express_backend', (req, res) => {
    console.log('hit');
    res.send('hello world')
});

app.listen(port, () => console.log(`Listing to port ${port}`));