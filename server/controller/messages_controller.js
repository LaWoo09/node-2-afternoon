let messages = [];
let id = 0;

module.exports = {
    getMessages: (req, res, next) => {
        res.status(200).send(messages)
    },
    
    postMessage: (req, res, next) => {
        const { text, time } = req.body;
       
        const newPost = {
            id, 
            text,
            time
        }
        messages.push(newPost);
        id++;
        res.status(200).send(messages)

    },

    updateMessage: (req, res, next) => {
        const { text } = req.body;
        const { id } = req.params
        const index = messages.findIndex((message) => {
            return message.id === +id;
        });
        if(index !== -1) {
            messages[index].text = text || messages[index].text
            res.status(200).send(messages)
        } else {
            res.status(404).send("Message not here")
        }
    },

    deleteMessage: (req, res, next) => {
        const { id } = req.params;
        const index = messages.findIndex((message) => {
            return message.id === +id;   
         })
         if( index !== -1) {
             messages.splice(index, 1);
             res.status(200).send(messages)
         } else {
             res.status(404).send("no message found to delete")
         }
    }
    


    
};
