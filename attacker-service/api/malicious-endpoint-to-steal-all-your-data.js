module.exports = (req, res) => {
  // this line might be a trigger to some security tools - it's just here to avoid myself creating yet another repository LOL
  // in a real attack, the attacker would not have the API endpoint close to the code for all of us to see!!! =D
  res.setHeader("Access-Control-Allow-Origin", "*");

  console.log(`${req.method}: malicious-endpoint received:`, req.body);

  res.json({ lol: true });
};
