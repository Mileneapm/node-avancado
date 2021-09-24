var MongoClient = require('mongodb').MongoClient;

module.exports = () => {

    const repository = {}

    repository.conectar = async () => {
        var uri = "mongodb+srv://milene:170923@cluster0.662hk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        var client = MongoClient.connect(uri);
        return client;
    }
    return repository;
}