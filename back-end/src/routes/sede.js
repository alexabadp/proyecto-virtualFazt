const { Router } = require("express")
const { getHandleSedes } = require("../handlers/getHandler")
const { postHandleSede, postHandleUpdateSede, postHandleDeleteSede } = require("../handlers/postHandler")

const router = Router()

router.get("/getSedes", getHandleSedes)
router.post("/postSede", postHandleSede)
router.post("/postUpdateSede", postHandleUpdateSede)
router.post("/postDeleteSede", postHandleDeleteSede)

module.exports = router