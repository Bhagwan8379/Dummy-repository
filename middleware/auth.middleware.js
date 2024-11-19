const jwt = require("jsonwebtoken")
exports.Protected = async (req, res, next) => {
    const token = req.cookies.auth
    if (!token) {
        return res.status(401).json({ message: "cookie Not found" })
    }
    jwt.verify(token, process.env.JWT_KEY, (error, decode) => {
        if (error) {
            return res.status(401).json({ message: "Invalid token" })
        }
        req.user = decode._id
        next()
    })
}