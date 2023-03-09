const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// client.db('address-book').collection('contacts');

const connectDatabase = () => {
  const uri = `mongodb+srv://msmlead:Happy@123@cluster0.jq6jeg1.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  return client;
  //   return? dlt
};

const getCollection = (collection) => {
  const client = connectDatabase();
  return client.db("address-book").collection(collection);
};

module.exports = {
  getCollection,
};
