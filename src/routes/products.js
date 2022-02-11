const { Router } = require('express');
const router = Router();
const morgan = require('morgan');

const {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controller/productsController');

router.get('/services/products/getProducts', morgan('tiny'), getProducts);

router.put('/services/products/createProduct', morgan('tiny'), createProduct);

router.post('/services/products/updateProduct', morgan('tiny'), updateProduct);

router.delete('/services/products/deleteProduct', morgan('tiny'), deleteProduct);


module.exports = router;