const express = require('express');
const app = express();
const {getMessages, postMessage, updateMessage, deleteMessage} = require('./controller/messages_controller')
const port = 3001;
app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})


app.get('/api/messages', getMessages);



app.post('/api/messages', postMessage);



app.put('/api/messages/:id', updateMessage);



app.delete('/api/messages/:id', deleteMessage);