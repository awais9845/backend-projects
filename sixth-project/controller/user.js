export const profile = (req, res) => {
  const { name, email, password, id } = req.body;

  res.status(200).json({
    message: req.body,
  });
};
