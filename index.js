const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const route = require('./Routes');
const error = require('./middlewares/error');

const PORT = 3000;

app.use(bodyParser.json());

route.product(app);
route.sales(app);

app.use(error);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
