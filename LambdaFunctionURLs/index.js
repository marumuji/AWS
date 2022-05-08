exports.handler = async (event) => {
  return JSON.stringify(event.queryStringParameters);
};

// curl "${FUNCTION_URL}?key1=value1&key2=value2&key3=value3"