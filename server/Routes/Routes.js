const express = require("express");

const router = express.Router()



const { signUp } = require("../Controllers/Auth");
const { login } = require("../Controllers/Auth");
// const { sendOTP } = require("../Controllers/Auth");
router.post('/signup',signUp)
router.post('/login',login)
router.get('/token', );
// router.post('/sendotp',sendOTP)






module.exports = router;