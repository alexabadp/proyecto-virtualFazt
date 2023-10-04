const { Router } = require("express");
const {
  postHandleSignupUser,
  postHandleLoginUser,
} = require("../handlers/postHandler");
const { getHandleAllUsers } = require("../handlers/getHandler");

const router = Router();

router.post("/signup", postHandleSignupUser);
router.post("/login", postHandleLoginUser);
router.get("/", getHandleAllUsers)

module.exports = router;
