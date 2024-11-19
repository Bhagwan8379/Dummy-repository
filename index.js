const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
const cookieParser = require("cookie-parser")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "dist")))
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use("/api/user", require("./routes/user.route"))
app.use("/api/auth", require("./routes/auth.routes"))
app.use("*", (req, res) => {
    res.send(path.join(__dirname, "dist", "index.html"))
    // res.json({ message: "404 Not Found" })
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED 🥭");
    app.listen(process.env.PORT || 5000, console.log("Server Running 🏃‍♀️"))
})