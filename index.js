const express = require('express');
const app = express();

const PORT = 8000;

app.get('/', (req,res)=> {
    res.send('HELLO THIS IS HI FROM EXPRESS');
})

app.listen(PORT, ()=> {
    console.log('listening on port ', PORT);
});