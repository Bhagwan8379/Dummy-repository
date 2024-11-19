const User = require("../model/User")

exports.addSubject = async (req, res) => {
    await User.create({ ...req.body, userId: req.user })
    res.json({ message: "Subject Add Success" })
}
exports.getAllSubjects = async (req, res) => {
    const result = await User.find({ userId: req.user })
    res.json({ message: "Subject Fetch Success", result })
}
exports.deleteSubjects = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({ message: "Subject Deleted Success" })
}
