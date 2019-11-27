const express = require('express');
const app = express();
const router = express.Router();

const helper = require(__dirname + '/../../helper/helper.js');

const locationList = __dirname + '/../../model/locations.json';
const locationListData = require(locationList);

router.post('/', (req, res) => {
    const { name, address, location, contact, categories } = req.body
    //const warehouse = locationListData.filter(location => {
    // return id === location.id
    //  })

    let newLocation = {
        id: helper.getNewId(),
        name: name,
        address: address,
        location: location,
        contact: contact,
        categories: categories,
        inventory: [

        ]
    }
    locationListData.push(newLocation);
    helper.writeJSONFile(locationList, locationListData)
    res.status(200).json(newLocation)

})

module.exports = router