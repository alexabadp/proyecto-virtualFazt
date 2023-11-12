const { postCiclo, postUpdateCiclo, postDeleteCiclo } = require("../controllers/nuestrosCiclos");
const { postSede, postUpdateSede, postDeleteSede } = require("../controllers/sedes");
const { signupUserDb, loginUser, postUpdateUser, postDeleteUser,  } = require("../controllers/user");

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

const postHandleUpdateUsuario = async (req, res) => {
  try {
    const result = await postUpdateUser(req.body)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const postHandleDeleteUsuario = async (req, res) => {
  try {
    const result = await postDeleteUser(req.body)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const postHandleCiclo = async (req, res) => {
  try {
    const result = await postCiclo(req.body)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const postHandleUpdateCiclo = async (req, res) => {
  try {
    const result = await postUpdateCiclo(req.body)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const postHandleDeleteCiclo = async (req, res) => {
  try {
    const result = await postDeleteCiclo(req.body)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const postHandleSede = async (req, res) => {
  try {
    const result = await postSede(req.body)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const postHandleUpdateSede = async (req, res) => {
  try {
    const result = await postUpdateSede(req.body)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const postHandleDeleteSede = async (req, res) => {

  console.log("handler, valor de id", req.body)

  try {
    const result = await postDeleteSede(req.body)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}


module.exports = {
  postHandleSignupUser,
  postHandleLoginUser,
  postHandleCiclo,
  postHandleUpdateCiclo,
  postHandleDeleteCiclo,
  postHandleUpdateUsuario,
  postHandleDeleteUsuario,
  postHandleSede,
  postHandleUpdateSede,
  postHandleDeleteSede
};
