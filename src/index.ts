import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Hello, FreeTime')
});

app.listen(port, ()=>{
    console.log(`server is runnig on port ${port}`)
})