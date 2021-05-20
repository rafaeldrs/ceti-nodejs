'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 5000;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT);
console.log(`Running on ${PORT}`);



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