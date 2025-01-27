const express = require('express');
const { signIn, signUp, logOut, Protected } = require('../controller/user.controller.js');

const userRouter = express.Router();

userRouter.post('/signin', signIn);
userRouter.post('/signup', signUp);
userRouter.post('/logout', logOut);
userRouter.post('/protected', Protected);

module.exports = userRouter;