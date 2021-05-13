const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const port = process.env.PORT || 8080;

const server = http.createServer(requestListener);
server.listen(port);


/*
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://administrador:I5m4GR0rJdhBztMB@cluster0.cfb0j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
*/