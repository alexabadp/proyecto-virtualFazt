const { getUsersDB } = require("../controllers/user");

const getHandleAllUsers = async (req, res) => {
    try {
        const result = await getUsersDB()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    getHandleAllUsers
}