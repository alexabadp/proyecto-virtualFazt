const { User } = require("../db");

const signupUserDb = async ({ name, email, password }) => {
  const user = await User.findOne({
    where: { email: email, password: password },
  });

  if (!user) {
    const newUser = await User.create({
      name,
      email,
      password,
    });
    return newUser;
  } else {
    return "El usuario ya existe";
  }
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email: email, password: password },
  });

  if (user?.email === email && user?.password === password) {
    return true;
  } else {
    return false;
  }
};

module.exports = { signupUserDb, loginUser };
