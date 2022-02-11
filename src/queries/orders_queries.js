exports.INSERT_INTO_ORDERS = 'INSERT INTO public."Orders"(id, "user", "createdAt", "updatedAt", state)VALUES ($1, $2, $3, $4, $5) RETURNING *;';
exports.SELECT_ORDERS_BY_ID = 'SELECT id FROM public."Orders" WHERE id=$1';
exports.SELECT_ALL_ORDERS = 'SELECT * FROM public."Orders"';
exports.SELECT_ORDERS = 'SELECT * FROM public."Orders"';
exports.SELECT_ORDERSDD = 'SELECT idPructs, qty FROM public."Orders"';
exports.INSERT_INTO_ITEMS = 'INSERT INTO public."Items"("idProducts", qty, id_orders) VALUES ($1, $2, $3)';
exports.SELECT_ALL_ITEMS_BY_ID = 'SELECT "idProducts", qty FROM public."Items" WHERE id_orders=$1';
exports.SELECT_ALL_PRODUCTS_BY_ID = 'SELECT * FROM public."Products" WHERE id=$1';
exports.UPDATE_ORDER_BY_ID = 'UPDATE public."Orders" SET state=$2 , "updatedAt"=$3 WHERE id=$1';