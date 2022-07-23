const { MongoClient } = require("mongodb");
const connectionString =
  "mongodb://localhost:27017?retryWrites=true&w=majority";
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: (cb) => {
    client.connect((err, db) => {
      if (err || !db) {
        return cb(err);
      }

      dbConnection = db.db("rtk-demo");
      console.log("Successfully connected to MongodDB.");
    });
  },
  getDb: () => dbConnection,
};
