const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
  console.log("req", req);
  const token = req.headers.authorization;
  console.log("toke", token);
  if (!token) {
    res.send("need token");
  } else {
    const dataToken = token;
    jwt.verify(dataToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.json({ auth: false, msg: "failed" });
      }
      next();
    });
  }
}
module.exports = { verifyJWT };
