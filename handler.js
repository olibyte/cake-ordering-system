'use strict';

module.exports.createOrder = async (event) => {

  const body = JSON.parse(event.body);
  const order = orderManager.createOrder(body);

  orderManager.placeNewOrder(order);

  return {
    statusCode: 200,
    body: JSON.stringify({
        message: 'Create order!',
        input: event,
      }),
  };
};
