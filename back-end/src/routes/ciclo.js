const { Router } = require("express")
const { postHandleCiclo, postHandleUpdateCiclo, postHandleDeleteCiclo } = require('../handlers/postHandler');
const { getHandleCiclos } = require("../handlers/getHandler");

const router = Router();

router.get("/getCiclos", getHandleCiclos)
router.post("/postCiclo", postHandleCiclo)
router.post("/postUpdateCiclo", postHandleUpdateCiclo)
router.post("/postDeleteCiclo", postHandleDeleteCiclo)

module.exports = router