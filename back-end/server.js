const app = require('./app');
require('dotenv/config');

const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT, () => console.log(`App on at port ${PORT}`));
