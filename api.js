const express = require("express");
const mockData = require("./mockData.json");

const router = express.Router();

router.get("/", function(req, res) {
    res.json(mockData);
});

router.delete("/:id", function(req, res) {

    const newArray = mockData.filter(function(element) {
        return element.id !== Number(req.params.id);
    });
    mockData = newArray;

    res.json({
        "status": "ok",
        "message": "user Delete!!!!"
    })
});

router.post("/new_person", function(req, res) {

    /* console.log(req.body); */

    const newPerson = {
        "id": req.body.id,
        "name": req.body.name,
        "city": req.body.city
    };

    mockData.push(newPerson);

    res.json({
        "status": "ok",
        "message": "New person inserted succesfully"
    });
});

router.patch("/update_person", function(req, res) {

    /* console.log(req.body); */

    const updatePerson = {
        "id": req.body.id,
        "name": req.body.name,
        "city": req.body.city
    };

    /* console.log("'" + updatePerson.name + "'"); */
    mockData.splice(updatePerson.id, 1, updatePerson);

    res.json({
        "status": "ok",
        "message": "person succesfully updated"
    });
});

/* router.delete("/delete_person", function(req, res) {

    console.log(req.body);

    const deletePerson = {
        "id": req.body.id,
        "name": req.body.name,
        "city": req.body.city
    };

    console.log(deletePerson.id);
    mockData.splice(deletePerson.id - 1, 1);

    res.json({
        "status": "ok",
        "message": "person deleted succesfully from database"
    });
}); */

router.get("/:id", function(req, res) {
    
    const newArray = mockData.filter(function(element) {
        return element.id === Number(req.params.id);
    });

    if (newArray.length === 1) {
        res.json(newArray[0]);
    } else {
        res.json("User not found");
    }
});




module.exports = router;