const { Router } = require("express")
const { postHandleCiclo } = require('../handlers/postHandler');
const { getHandleCiclos } = require("../handlers/getHandler");

const router = Router();

router.post("/postCiclo", postHandleCiclo)
router.get("/getCiclos", getHandleCiclos)

module.exports = router