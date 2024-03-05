const {MongoClient} = require('mongodb');

const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);

const main = async() => {
    await client.connect();
    const db = client.db("shop");
    const collection = db.collection("products");
    const data = await collection.find({price: {$gt: 1200}}).toArray();
    
    return data;
}

main()
.then((res) => console.log(res))
.catch((e) => console.log(e))
.finally(() => client.close());