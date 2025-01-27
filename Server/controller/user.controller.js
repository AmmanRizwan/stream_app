const User = require('../modules/model.js');
const { hash, compare } = require('bcryptjs');
const { createAccessToken, createRefreshToken, sendRefreshToken, sendAccessToken } = require('../token/token.js');
const { isAuth } = require('../token/isAuth.js');

const signUp = async (req, res) => {
  try {
    {
      const { email, password } = req.body;
      const existUser = await User.findOne({email: email});
      const findUser = await User.find({});
      
      if (existUser.email === email) {
        return res.status(400).json({message: "User Already Exists!"});
      }
      const hashPassword = await hash(password, 10);
      
      console.log(existUser);

      let id = 0;
      
      if (findUser.length > 0) {
        let lastUser = findUser.slice(-1);
        let lastId = lastUser[0].id;
        id = lastId + 1;
      }
      
      if (!password) {
        return res.status(400).json({message: "Please Enter Your password"});
      }
      
      const newUser = await User.create({
        id: id,
        email: email,
        password: hashPassword,
        username: req.body.username
      })
      
      res.status(201).json({message: "User Created!!"});
    }
  }
  catch(err) {
    console.log(err.message);
  }
}

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existUser = await User.findOne({email: email});

    if (existUser.email !== email) {
      return res.status(400).json({message: "User Don't Exist!"});
    }
    
    const valid = compare(password, existUser.password);
    if (!valid) {
      return res.status(400).json({message: "Incorrect Password!"});
    }

    const accesstoken = createAccessToken(existUser.id);
    const refreshtoken = createRefreshToken(existUser.id);

    existUser.refreshtoken = refreshtoken;
    await existUser.save();

    sendAccessToken(req, res, accesstoken);
    sendRefreshToken(res, refreshtoken);    
  }
  catch(err) {
    console.log(err.message);
  }
}

const logOut = (req, res) => {
  try {
    res.clearCookie('refeshtoken', {path: "/refresh_token"});
    return res.status(200).json({message: "Logged Out!"});
  }
  catch(err) {
    console.log(err.message);
  }
}

const Protected = (req, res) => {
  try {
    const userId = isAuth(req);

    if (userId !== null) {
      return res.status(200).json({message: "This is a protected data."});
    }
  }
  catch(err) {
    console.log(err.message);
  }
}

module.exports = {
  signIn,
  signUp,
  logOut,
  Protected
}