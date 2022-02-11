const db = require('../db');
const products_queries = require('../queries/products_queries');

const getCreateID = require('../tools');

exports.getProducts = async(req, res) => {
    const response = await db.query(products_queries.SELECT_PRODUCTS);

    res.status(200).json({
        'items': response.rows,
        'status': 200
    });
};

exports.createProduct = async(req, res) => {
    var id = getCreateID.createID();
    const response = await db.query(products_queries.SELECT_PRODUCTS_BY_ID, [id]);
    if (response.rows.length) {
        id = getCreateID.createID();
    }
    const { name, image, price } = req.body;
    const date = Date.now().toString();
    await db.query(products_queries.INSERT_INTO_PRODUCTS, [id, image, name, price, date]);
    res.status(200).json({
        'id': id,
        'status': 200
    });

};

exports.updateProduct = async(req, res) => {

    const { image, price, id, name } = req.body;
    await db.query(products_queries.UPDATE_PRODUCT, [id, image, name, price]);
    res.status(200).json({
        'status': 200
    });

};

exports.deleteProduct = async(req, res) => {
    const { id } = req.body;
    await db.query(products_queries.DELETE_PRODUCTS_BY_ID, [id]);
    res.status(200).json({
        'status': 200
    });
};