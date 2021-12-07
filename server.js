const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

let getRan = () => {

}

app.get('/express_backend', (req, res) => {
    console.log('hit');
    res.send('hello world')
});

app.get('/testNewChat', (req, res) => {
    const authObject = { 'Project-ID': '2e482801-8d27-4347-a1ce-c97a95ff2b42', 'User-Name': 'blue', 'User-Secret': 'sky'};
    const bodyObject = {
      "title": "Test New Chat",
      "is_direct_chat": false
    }
    axios.post('https://api.chatengine.io/chats/', bodyObject, { headers: authObject })
        .then(body => {
            console.log('success data is:', body.data);
            res.send(body.data);
        })
        .catch(error => console.log(`new chat error ${error}`))
});

app.listen(port, () => console.log(`Listing to port ${port}`));