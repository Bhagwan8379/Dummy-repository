const Auth = require("../model/Auth")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.registerAdmin = async (req, res) => {
    const { email, password } = req.body
    const result = await Auth.findOne({ email })
    if (result) {
        return res.status(409).json({ message: "Email Already Exist Please Use Another Email...!" })
    }
    const hash = await bcrypt.hash(password, 10)
    await Auth.create({ ...req.body, password: hash })
    res.json({ message: "Admin Register Success" })
}
exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body
    const result = await Auth.findOne({ email })
    if (!result) {
        return res.status(401).json({ message: "Email Not Found" })
    }
    const isVerify = await bcrypt.compare(password, result.password)
    if (!isVerify) {
        return res.status(401).json({ message: "Password Not Match" })
    }
    const token = await jwt.sign({ _id: result._id, name: result.name }, process.env.JWT_KEY)
    res.cookie("auth", token, { maxAge: 1000 * 60 * 60 * 12 })
    res.json({
        message: "Admin Register Success",
        result: {
            _id: result._id,
            name: result.name,
            email: result.email,
        }
    })
}
exports.logoutAdmin = async (req, res) => {
    res.clearCookie("auth")
    res.json({ message: "Admin Register Success" })
}