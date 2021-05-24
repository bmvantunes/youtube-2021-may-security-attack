module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  console.log(`${req.method}: malicious-endpoint received:`, req.body);

  res.json({ lol: true });
};
