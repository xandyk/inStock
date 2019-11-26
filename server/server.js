const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json())
app.get('/', (req,resp)=>{
    res.sendFile(__dirname + '/index.html');

});

app.use('/inventory', require('./routes/api/inventory'));




app.listen(5000, function(){
    console.log('Server is running on port 5000');
});
