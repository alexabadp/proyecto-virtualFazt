const { Router } = require("express");

// Importar todos los routers;
const userRouter = require("./user");
const cicloRouter = require("./ciclo")

const router = Router();

router.use("/user", userRouter);
router.use("/ciclo", cicloRouter);

module.exports = router;
