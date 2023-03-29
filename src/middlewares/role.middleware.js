const isAdmin = (req, res, next) => {
  const { firstname, role } = req.user;
  if (role !== "ADMIN") {
    return res.status(401).json({
      message: `${firstname} you shall not pass`,
    });
  }
  next();
};

// rest operator ??
const hasRoles = (...roles) => {
  return (req, res, next) => {
    const { role } = req.user;
    if (!roles.includes(role)) {
      return res.status(401).json({
        message: `User need one of this roles ${roles}`,
      });
    }
    next();
  };
};

module.exports = {
  isAdmin,
  hasRoles,
};
