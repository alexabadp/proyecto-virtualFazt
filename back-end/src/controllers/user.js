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
      estado: true
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

const getUsersDB = async () =>{
  const users = await User.findAll()

  return users
}

const postUpdateUser = async ({ id, name, email, password}) => {
  const existingUser = await User.findOne({
    where: {id: id}
  });

  if (existingUser) {
    await existingUser.update({
      name,
      email,
      password
    })

    return "Usuario actualizado con éxito"
  } else {
    return "El usuario no existe"
  }
}

const postDeleteUser = async ({id}) => {
  console.log("logica para eliminar", id)
  const existingUser = await User.findOne({
    where: {id: id}
  })

  if(existingUser) {
    await existingUser.update({
      estado: !existingUser.estado
    })

    return "Usuario eliminado con éxito"
  } else {
    return "El usuario no existe" 
  }
}

module.exports = { signupUserDb, loginUser, getUsersDB, postUpdateUser, postDeleteUser };
