const db = require('../db');
const getCreateID = require('../tools');

const orders_queries = require('../queries/orders_queries');

exports.createOrder = async(req, res) => {
    const { items, user } = req.body;
    var id_order = getCreateID.createID();
    const response = db.query(orders_queries.SELECT_ORDERS_BY_ID, [id_order]);
    const createdAt = Date.now().toString();
    if (response.length) {
        id_order = getCreateID.createID();
    };
    db.query(orders_queries.INSERT_INTO_ORDERS, [id_order, user, createdAt, createdAt, 'pending']);
    items.forEach(element => {
        var id_product = element.id;
        var qty = element.qty;
        db.query(orders_queries.INSERT_INTO_ITEMS, [id_product, qty, id_order]);
    });
    res.status(200).json({
        'id': id_order,
        'status': 200
    });

};

exports.getOrders = async(req, res) => {
    //TODO: Mostar esta estructura
    const response_orders = await db.query(orders_queries.SELECT_ALL_ORDERS);
    const aux = response_orders.rows;
    var all_info = [];

    for (let i = 0; i < aux.length; i++) {
        const id_order = response_orders.rows[i].id;
        const items = await db.query(orders_queries.SELECT_ALL_ITEMS_BY_ID, [id_order]);
        aux[i]['items'] = items.rows
        all_info.push(aux[i]);

    };
    res.status(200).json({
        'items': all_info,
        'status': 200
    });

};

exports.updateOrder = async(req, res) => {

    const { id, state } = req.body
    const updatedAt = Date.now().toString();
    await db.query(orders_queries.UPDATE_ORDER_BY_ID, [id, state, updatedAt]);
    res.status(200).json({
        'status': 200
    });

};