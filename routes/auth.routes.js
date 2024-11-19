const { registerAdmin, loginAdmin, logoutAdmin } = require("../controllers/auth.controller")

const router = require("express").Router()

router

    .post("/register-admin", registerAdmin)
    .post("/login-admin", loginAdmin)
    .post("/logout-admin", logoutAdmin)

module.exports = router