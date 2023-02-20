const express = require("express");
const router = express.Router();
const connection = require("../lib/db_connection.js");

router.get("/", (req, res) => {
    try{
        connection.query("select * from users", (err, result) => {
            if(err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});

router.get("/:id", (req, res) => {
    try{
        connection.query(`select * from users where userID = ?`, (err, result) => {
            if(err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
})

module.exports = router;