var express = require("express");
var router = express.Router();
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const User = require("../Models/dbUser");

// //Use for user SignUp Route
// router.post("/signup", (req, res) => {
//   let new_user = req.body;
//   console.log(new_user);
//   if (Object.keys(new_user).length === 0)
//     res.status(401).send({ msg: "Please add details to create user" });
//   else {
//     User.find().exec((error, users) => {
//       if (error) {
//         console.log(error);
//       } else {
//         const indexEmail = users.findIndex((el) => el.email == new_user.email);
//         if (indexEmail != -1)
//           return res.status(403).send({
//             msg:
//               "An user with same email is already exists,Please try another E-mail",
//           });
//         const indexuserName = users.findIndex(
//           (el) => el.username == new_user.username
//         );
//         if (indexuserName != -1)
//           return res.status(403).send({
//             msg:
//               "An user with same User Name is already exists,Please try another User Name",
//           });
//         User.create(new_user, (error, user) => {
//           if (error) console.log(error);
//           else
//             res
//               .status(201)
//               .send(`New user created with ${user.username} as user name.`);
//         });
//       }
//     });
//   }
// });
// //Use for user SignIn Route
// router.post("/signin", (req, res) => {
//   const user = {
//     email: req.body.email,
//     password: req.body.password,
//   };
//   User.findOne(user).exec((error, userData) => {
//     if (error) console.log(error);
//     else {
//       if (!userData)
//         return res.status(401).send({
//           msg: "Please check email id and password properly, and try again.",
//         });
//       else {
//         const accessToken = jwt.sign(
//           { username: userData.username },
//           process.env.ACCESS_TOKEN_SECRET,
//           { expiresIn: process.env.JWT_EXPIRES_IN }
//         );
//         res.status(200).send({ msg: "Login Successful", token: accessToken });
//       }
//     }
//   });
// });
// //Sanity check for users Route
// router.get("/", (req, res) => {
//   res.send("Sanity Check");
// });
module.exports = router;
