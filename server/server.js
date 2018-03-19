const express = require('express');
//creating instance of express
const app = express();
const path = require('path');
const publicPath = path.join(__dirname,'..','public');
//PORT for heroku
const port = process.env.PORT || 3000

//serve up the public folder
app.use(express.static(publicPath));

app.get('*',(req,res)=>{
    res.sendFile(path.join(publicPath,'index.html'));
});

app.listen(port,()=>{
    console.log('server is up and running on port 3000');
});

//to run node file : node server/server.js