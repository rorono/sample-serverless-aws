'use strict';

const createResponse = (statusCode, body) => (
  {
    statusCode,
    headers: {
      // 'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify(body),
  }
);

module.exports.root = (event, context, callback) => {
  const body = {
    message: 'Go Serverless v1.0! Your function executed successfully!',
    input: event,
  }

  callback(null, createResponse(200, body));
};


module.exports.todosReadAll = (event, context, callback) => {
  const body = {
    message: 'todosReadAll',
    input: event,
  }

  callback(null, createResponse(200, body));
};


module.exports.todosReadOne = (event, context, callback) => {
  const id = event.pathParameters.id;
  const body = {
    id,
    message: 'todosReadOne',
    input: event,
  }

  callback(null, createResponse(200, body));
};
