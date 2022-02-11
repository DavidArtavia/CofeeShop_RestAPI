const { Router } = require('express');
const router = Router();
const morgan = require('morgan');

const { createOrder, getOrders, updateOrder } = require('../controller/ordersController');

router.get('/services/orders/getOrders', morgan('tiny'), getOrders);

router.put('/services/orders/createOrder', morgan('tiny'), createOrder);

router.post('/services/orders/updateOrder', morgan('tiny'), updateOrder);


module.exports = router;