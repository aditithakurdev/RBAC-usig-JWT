const jwt = require("jsonwebtoken");
const roles = require("../role/roles");

const generateToken = (user) => {
  const token = jwt.sign({ id: user.id, role: user.role }, "your-secret-key", {
    expiresIn: "1h",
  });
  return token;
};

module.exports = {
  generateToken,
};
