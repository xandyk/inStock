const express = require ('express');
const app = express();
const router = express.Router();

const helper = require(__dirname + '/../../helper/helper.js');

const productList = __dirname + '/../../model/products.json';
const productListData = require(productList);

const locationList = __dirname + '/../../model/locations.json';
const locationListData = require(locationList);

router.get("/",(req,res) => {
    res.json(locationListData)
})
router.post('/', (req, res) => {
  const {id,date,item,city,quantity,description} = req.body
  const warehouse = locationListData.filter(location =>{
      return id === location.id
  })
  

  let newProduct ={ 
    id: helper.getNewId(),
    name: item,
    refNumber: "JK2020FD7811208",
    location: city,
    descriptionBrief: description,
    descriptionDetail: description,
    orderedBy: warehouse[0].contact.name,
    dateOrdered: date,
    quantity: quantity,
    status: "Out of Stock",
    categories: warehouse[0].categories
}
let warehouseIndex = locationListData.findIndex(location =>{
    return id === location.id
})
locationListData[warehouseIndex].inventory.push(newProduct);
helper.writeJSONFile(locationList, locationListData)
productListData.push(newProduct);
helper.writeJSONFile(productList, productListData);
res.status(200).json(productListData)
console.log(newProduct)

})



module.exports = router