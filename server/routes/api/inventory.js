const express = require('express');
const app = express();
const router = express.Router();

const helper = require(__dirname + '/../../helper/helper.js');

const productList = __dirname + '/../../model/products.json';
const productListData = require(productList);

const locationList = __dirname + '/../../model/locations.json';
const locationListData = require(locationList);

router.get("/", (req, res) => {
    console.log("i am in the inventory route")
    res.json(productListData)
})

// router.get("/inventory", (req, res) => {
//     res.json(productListData)
// })





router.post('/', (req, res) => {
    const { id, date, item, city, quantity, status, description } = req.body
    const warehouse = locationListData.filter(location => {
        return id === location.id
    })

    let newProduct = {
        id: helper.getNewId(),
        name: item,
        refNumber: "JK2020FD7811208",
        location: city,
        descriptionBrief: description,
        descriptionDetail: description,
        orderedBy: warehouse[0].contact.name,
        dateOrdered: date,
        quantity: quantity,
        status: "",
        categories: warehouse[0].categories
    }
    newProduct.status = status ? "In Stock" : "Out of Stock"
    let warehouseIndex = locationListData.findIndex(location => {
        return id === location.id
    })
    locationListData[warehouseIndex].inventory.push(newProduct);
    helper.writeJSONFile(locationList, locationListData)
    productListData.push(newProduct);
    helper.writeJSONFile(productList, productListData);
    // res.status(200).json(productListData)
    res.status(200).json(newProduct)
    console.log(newProduct)

})

//  Get product with :id
app.get("/inventory/id/:id", (req, res) => {
    // res.send(req.params.id);
    const found = products.some(product => product.id === req.params.id);
    if (found) {
        // res.json(Object(videos.filter(video => video.id === req.params.id)));
        res.json(products.find(product => product.id === req.params.id));
    } else {
        res
            .status(400)
            .json({ errorMessage: `Product with ID:${req.params.id} not found` });
    }
});



module.exports = router