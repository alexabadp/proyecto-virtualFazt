const { Router } = require("express");

// Importar todos los routers;
const userRouter = require("./user");

const router = Router();

router.use("/user", userRouter);

module.exports = router;
