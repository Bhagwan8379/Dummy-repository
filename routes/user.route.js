const { getAllSubjects, addSubject, deleteSubjects } = require("../controllers/user.controller")
const { Protected } = require("../middleware/auth.middleware")

const router = require("express").Router()

router

    .get("/get-user", Protected, getAllSubjects)
    .post("/add-user", addSubject)
    .delete("/delete-user/:id", Protected, deleteSubjects)

module.exports = router