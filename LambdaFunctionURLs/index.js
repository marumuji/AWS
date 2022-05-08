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
    "cookies": [
      "Cookie_1=Value1; Expires=9 May 2022 20:08 GMT",
      "Cookie_2=Value2; Max-Age=78000"
    ],
    "isBase64Encoded": false
  };
};

// curl -i ${FUNCTION_URL} 