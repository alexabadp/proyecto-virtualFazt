const { signupUserDb, loginUser } = require("../controllers/user");

const postHandleSignupUser = async (req, res) => {
  try {
    const result = await signupUserDb(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const postHandleLoginUser = async (req, res) => {
  try {
    const result = await loginUser(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  postHandleSignupUser,
  postHandleLoginUser,
};
