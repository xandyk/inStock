const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();
const fileName = __dirname + '/model/locations.json'
let locations = require(fileName);
const fileNameTwo = __dirname + '/model/products.json'
let products = require(fileNameTwo);
const helper = require("./helper/helper");


app.use(cors())
app.use(express.json())
// app.get('/', (req,resp)=>{
//     res.sendFile(__dirname + '/index.html');}

// app.get('/inventory', (req, res) => {
//     // res.sendFile(__dirname + '/index.html');
//     res.json(products.map(product => {
//         return {
//             id: product.id,
//             refNumber: product.refNumber,
//             name: product.name,
//             descriptionBrief: product.descriptionBrief,
//             descriptionDetail: product.descriptionDetail,
//             orderedBy: product.orderedBy,
//             dateOrdered: product.dateOrdered,
//             quantity: product.quantity,
//             status: product.status,
//             categories: product.categories
//         }
//     }))
// });


app.use('/inventory', require('./routes/api/inventory'));
app.use('/locations', require('./routes/api/locations'));
app.get('/locations', (req, res) => {
    // res.sendFile(__dirname + '/index.html');
    res.json(locations.map(location => {
        return {
            id: location.id,
            name: location.name,
            address: location.address,
            location: location.location,
            contact: location.contact,
            categories: location.categories,
            inventory: location.inventory
        }
    }))
});

//  Get product with :id
app.get("/locations/id/:id", (req, res) => {
    // res.send(req.params.id);
    const found = locations.some(location => location.id === req.params.id);
    if (found) {
        // res.json(Object(videos.filter(video => video.id === req.params.id)));
        res.json(locations.find(location => location.id === req.params.id));
    } else {
        res
            .status(400)
            .json({ errorMessage: `Location with ID:${req.params.id} not found` });
    }
});






app.listen(5000, function () {
    console.log('Server is running on port 5000');
});