const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// client.db('address-book').collection('contacts');

const password = "Happy%40123";

let client = null;

const connectDatabase = () => {
  if (client === null) {
    const uri = `mongodb+srv://msmlead:12345sad@cluster0.jq6jeg1.mongodb.net/?retryWrites=true&w=majority`;
    client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });
  }
  return client;
};

const getCollection = (collection) => {
  const client = connectDatabase();
  return client.db("ninja_lawyer").collection(collection);
};

const checkConnection = () => {
  const status = connectDatabase().serverStatus();
  console.log(status);
  return status;
};

module.exports = {
  getCollection,
  checkConnection,
};
