module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "https://youtube-2021-may-vulnerable-app.vercel.app");

  console.log(`${req.method}: malicious-endpoint received:`, req.body);

  res.json({ lol: true });
};
