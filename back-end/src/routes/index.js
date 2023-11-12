const { Router } = require("express");

// Importar todos los routers;
const userRouter = require("./user");
const cicloRouter = require("./ciclo")
const sedeRouter = require("./sede")

const router = Router();

router.use("/user", userRouter);
router.use("/ciclo", cicloRouter);
router.use("/sede", sedeRouter)

module.exports = router;
