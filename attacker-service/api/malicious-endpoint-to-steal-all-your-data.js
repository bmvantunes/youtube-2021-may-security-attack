module.exports = (req, res) => {
  console.log("malicious-endpoint received:", req.body);

  res.json({ lol: true });
};
