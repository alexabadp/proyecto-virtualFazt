const { getCiclo } = require("../controllers/nuestrosCiclos");
const { getSede } = require("../controllers/sedes");
const { getUsersDB } = require("../controllers/user");

const getHandleAllUsers = async (req, res) => {
    try {
        const result = await getUsersDB()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getHandleCiclos = async (req, res) => {
    try {
        const result = await getCiclo()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getHandleSedes = async (req, res) => {
    try {
        const result = await getSede()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    getHandleAllUsers, 
    getHandleCiclos,
    getHandleSedes
}