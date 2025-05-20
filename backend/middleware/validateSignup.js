// middleware/validateSignup.js
module.exports = (req, res, next) => {
  const { fullname, username, email, password } = req.body;
  if (!fullname || !username || !email || !password) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  next();
};
