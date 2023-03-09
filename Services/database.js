const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// client.db('address-book').collection('contacts');

const connectDatabase = () => {
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.tvyjzb3.mongodb.net/?retryWrites=true&w=majority`;
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
