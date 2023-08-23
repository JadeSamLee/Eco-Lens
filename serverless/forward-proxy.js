// serverless/forward-proxy.js

const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const response = await fetch(
      'https://eco-lens.vercel.app' + req.url,
      {
        method: req.method,
        headers: req.headers,
        body: req.body
      }
    );

    const data = await response.text();

    res.status(response.status);
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  } catch (error) {
    res.status(500).send('An error occurred');
  }
};
