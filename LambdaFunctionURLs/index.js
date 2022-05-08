exports.handler = async (event) => {
  return JSON.stringify(event.body);
};

// curl -X POST \
// -H 'Content-Type: application/json' \
// -d '{ "example": "test" }' \
// ${FUNCTION_URL} 