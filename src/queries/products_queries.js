exports.INSERT_INTO_PRODUCTS = 'INSERT INTO public."Products"(id, image, name, price, "Created")VALUES ($1, $2, $3, $4, $5)';
exports.SELECT_PRODUCTS = 'SELECT * FROM public."Products";';
exports.UPDATE_PRODUCT = 'UPDATE public."Products" SET image=$2, name=$3, price=$4 WHERE id=$1';
exports.SELECT_PRODUCTS_BY_ID = 'SELECT id FROM public."Products" WHERE id=$1';
exports.DELETE_PRODUCTS_BY_ID = 'DELETE FROM public."Products" WHERE id=$1';