var createError = require("http-errors");
var express = require("express");
require("dotenv").config();
var cors = require("cors");
const mongoose = require("mongoose");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

//API configuration
//=========================================================================================================================================
const app = express();
const port = process.env.PORT || 8001;
//=========================================================================================================================================

//middleWare
//=========================================================================================================================================
app.use((req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${req.url} -- ${new Date()}`
  );
  next();
});
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
//=========================================================================================================================================

//Db Configuration
//=========================================================================================================================================
// const connection_url = `mongodb+srv://${process.env.USER_Name}:${process.env.Password}@cluster0.zhy9a.mongodb.net/Imgur?retryWrites=true&w=majority`;
// mongoose.Promise = global.Promise;
// mongoose
//   .connect(connection_url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("DataBase Connection successful"))
//   .catch((err) => console.log(err));
//=========================================================================================================================================

//API Endpoint
//=========================================================================================================================================
// app.get('/',(req, res) => {
//     res.status(200).send('Sanity Check ok!!!');
// });
//=========================================================================================================================================

//Listner
//=========================================================================================================================================
app.listen(port, () => {
  console.log(`Listning on Port No. : ${port}`);
});
//=========================================================================================================================================
