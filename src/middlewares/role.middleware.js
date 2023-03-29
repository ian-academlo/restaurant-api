const isAdmin = (req, res, next) => {
  const { firstname, role } = req.user;
  if (role !== "ADMIN") {
    return res.status(401).json({
      message: `${firstname} is not ADMIN`,
    });
  }
  next();
};

module.exports = {
  isAdmin,
};
