const express = require('express');
const app = express();

app.get('/', (req,resp)=>{
    res.sendFile(__dirname + '/index.html');

});






app.listen(5000, function(){
    console.log('Server is running on port 5000');
});
