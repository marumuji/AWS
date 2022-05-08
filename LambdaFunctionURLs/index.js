exports.handler = async (event) => {
  return JSON.stringify(event.queryStringParameters);
};