const jwt = require("jsonwebtoken");
// exports.auth = (req, res, next) => {
//   // console.log("Check whether user is signed", req.headers.authorization);
//   if (!req.headers.authorization) {
//     res.status(401).json({ message: "Please sign In first" });
//   }
//   next();
// };

const auth = (req, res, next) => {
  // console.log("Check whether user is signed", req.headers.authorization);
  console.log("user", req.user);
  if (!req.headers.authorization) {
    res.status(401).json({ message: "Please sign In first" });
  }

  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, "JST_TOKEN_PASS@123"); //user dotor {id: uuid} orson bga
  req.user = user; // {id : ""}
  next();
};

module.exports = { auth };
