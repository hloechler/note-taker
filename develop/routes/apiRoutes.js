const fs = require("fs");
const uuid = require("uuid");
const router = require("express").Router();

router.get("/notes", (req, res) =>{
    const data = fs.readFileSync("./develop/db/db.json");
    res.json(JSON.parse(data));
})

router.post("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./develop/db/db.json"));
    const addNote = req.body;
    addNote.id = uuid. v4();
    notes.push(addNote);
    fs.writeFileSync("./develop/db/db.json", JSON.stringify(notes));
    res.json(notes);
})


module.exports = router;