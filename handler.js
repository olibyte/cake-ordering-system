'use strict';

module.exports.createOrder = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
        message: 'Create order!',
        input: event,
      }),
  };
};
