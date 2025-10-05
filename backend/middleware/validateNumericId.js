export const validateNumericId = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ success:false, message: "Invalid id" });
  }
  req.params.id = id;
  next();
};
