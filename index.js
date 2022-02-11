require("dotenv").config();
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(require('./src/routes/orders'));
app.use(require('./src/routes/products'));

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
});