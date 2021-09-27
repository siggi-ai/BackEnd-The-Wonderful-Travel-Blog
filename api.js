const express = require("express");
let mockData = require("./mockData.json");

const router = express.Router();

router.get("/", function(req, res) {
    res.json(mockData);
});

router.post("/new_post", function(req, res) {

    var input_text = req.body.city;

    const newEntry = {
        "id": mockData.length +1,
        "city": req.body.city,
        "country": req.body.country,
        "visiting_date": req.body.inputVisitingDate,
        "image": req.body.image,
        "position": {
        "lat": Number(req.body.lat),
        "lng": Number(req.body.lng)
        },
        "author":"Henriette",
        "authorPic": "https://ksassets.timeincuk.net/wp/uploads/sites/46/2015/11/woman-writing-1.jpg",
        "description": req.body.description,
    };

    mockData.push(newEntry);
    console.log(newEntry);
    

    res.json({
        "status": "ok",
        "message": "entry inserted",
    });
});


    router.delete("/:id", function(req, res) {

    const newEntry = mockData.filter(function(element) {
        return element.id !== Number(req.params.id);
    });
    mockData = newEntry;

    res.json({
        "status": "ok",
        "message": "city deleted"
    })
});

module.exports = router;