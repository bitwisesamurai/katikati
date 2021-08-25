exports.handler = (event) => {
  const challenge = event.queryStringParameters.challenge;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
      "X-Content-Type-Options": "nosniff",
    },
    body: JSON.stringify({ challenge }),
  };
};
