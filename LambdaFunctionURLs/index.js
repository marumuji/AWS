exports.handler = async (event) => {
  return {
    "statusCode": 201,
    "headers": {
      "Content-Type": "text/plain",
      "My-Custom-Header": "Custom Value"
    },
    "body": JSON.stringify({
      "message": "Hello, world!"
    }),
    "isBase64Encoded": false
  };
};

// curl -i ${FUNCTION_URL} 