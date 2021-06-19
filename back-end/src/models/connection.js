const mongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME || 'ChallengeAmais';

let schema = null;

const connection = async () => mongoClient
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => conn.db(dbName))
  .then((dbSchema) => {
    schema = dbSchema;
    return schema;
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

module.exports = connection;
