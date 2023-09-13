const { Router } = require("express");
const {
  postHandleSignupUser,
  postHandleLoginUser,
} = require("../handlers/postHandler");

const router = Router();

router.post("/signup", postHandleSignupUser);
router.post("/login", postHandleLoginUser);

module.exports = router;
