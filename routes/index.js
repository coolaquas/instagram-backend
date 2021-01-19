var express = require("express");
var router = express.Router();
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const Posts = require("../Models/dbPosts");
//authentication middleware
// let authToken = (req, res, next) => {
//   const token = req.headers["authorization"];
//   if (token == null || token == "No Token")
//     return res.status(401).send({ msg: "Please Sign In first" });
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
//     if (error) return res.status(401).send({ msg: "Unauthorize User" });
//     req.user = user;
//     next();
//   });
// };
//get all the post
router.get("/", (req, res) => {
  res.send("ok");
  // Posts.find().exec((error, posts) => {
  //   error ? res.status(400).send({ msg: error }) : res.status(200).send(posts);
  // });
});
//add a post
// router.post("/addPost", authToken, (req, res) => {
//   // console.log(req.user.username);
//   let new_Post = req.body;
//   new_Post.author = req.user.username;
//   Posts.create(new_Post, (error, data) => {
//     if (error) {
//       console.log(error);
//     } else {
//       res.status(201).send("Post Inserted");
//     }
//   });
// });
//Adding for for a perticuler post
// router.put("/vote/:post_id", authToken, (req, res) => {
//   let search_id = req.params.post_id;
//   let voter = req.user.username;
//   Posts.findById(search_id).exec((error, result) => {
//     if (error) res.status(404).send({ msg: "The searched Post not found" });
//     else {
//       const idx = result.vote.indexOf(voter);
//       if (idx == -1) {
//         result.vote.push(voter);
//         result.save();
//         res
//           .status(200)
//           .send({ msg: `${voter} has add a vote`, votes: result.vote.length });
//       } else {
//         result.vote.splice(idx, 1);
//         result.save();
//         res.status(200).send({
//           msg: `${voter} has remove a vote`,
//           votes: result.vote.length,
//         });
//       }
//     }
//   });
// });
module.exports = router;
