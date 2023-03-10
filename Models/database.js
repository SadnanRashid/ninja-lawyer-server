const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// client.db('address-book').collection('contacts');

const password = "Happy%40123";

const connectDatabase = () => {
  const uri = `mongodb+srv://msmlead:12345sad@cluster0.jq6jeg1.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  return client;
};

const getCollection = (collection) => {
  const client = connectDatabase();
  return client.db("ninja_lawyer").collection(collection);
};

module.exports = {
  getCollection,
};
