const roles = require("../role/roles");
const checkRole = (role) => {
  return (req, res, next) => {
    const userRole = "admin"; // Assuming the user role is added to the request object during JWT verification
    if (roles[userRole].includes(role)) {
      next();
    } else {
      return res.status(403).json({ message: "Unauthorized access" });
    }
  };
};

module.exports = checkRole;
