const { Router } = require("express");
const {
  postHandleSignupUser,
  postHandleLoginUser,
  postHandleUpdateUsuario,
  postHandleDeleteUsuario,
} = require("../handlers/postHandler");
const { getHandleAllUsers } = require("../handlers/getHandler");

const router = Router();

router.post("/signup", postHandleSignupUser);
router.post("/login", postHandleLoginUser);
router.get("/", getHandleAllUsers)
router.post("/postUpdateUsuario", postHandleUpdateUsuario);
router.post("/postDeleteUsuario", postHandleDeleteUsuario);

module.exports = router;
