const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../Models/UserSchma");

exports.signUp = async (req, res) => {
  try {
    //data fetch from body
    const { name, lastname, email, password, city, address } = req.body;
    //validate karlo
    if (!name || !lastname || !email || !password || !city || !address) {
      return res.status(403).json({
        success: false,
        message: "All Fields are Required",
      });
    }

    // check already user exsist or not
    const exsistingUser = await User.findOne({ email });
    if (exsistingUser) {
      return res.status(400).json({
        success: false,
        message: "User is Already Registered",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      lastname,
      email,
      password: hashedPassword,
      city,
      address,
    });

    //return res
    return res.status(200).json({
      success: true,
      message: "User is Registered Succefully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User cannot Registered ",
    });
  }
};

//Login
exports.login = async (req, res) => {
  try {
    //get data from body
    const { email, password } = req.body;

    //validate Data
    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "Fill all the files",
      });
    }

    //user check exsist or not
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User is not registered plse signup first",
      });
    } //generate JWT after password matching
    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        email: user.email,
        id: user._id,
      };
      const token = jwt.sign(payload, "hansal", {
        expiresIn: 120,
      });
      user.token = token;
      user.password = undefined;

      //create cookie and send response
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "Logged in Succesfully",
      });
      req.user=user;
      console.log(user)
      
    } else {
      return res.status(401).json({
        success: false,
        message: "password is Incorrect",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      success: false,
      message: "Try again Later",
    });
  }
};

exports.getToken = async (req, res) => {
  const authorizationHeader = req.headers.authorization;

  if (authorizationHeader) {
    const token = authorizationHeader.split(" ")[1];

    console.log("Token:", token);
    res.send("Token extracted successfully");
    const {userId}=req.user;
    const user = await User.findById(userId);
    user.token = newToken;
    await user.save();
    console.log('User token updated successfully');
  } else {
    res.status(401).send("Unauthorized: No token provided");
  }
};
