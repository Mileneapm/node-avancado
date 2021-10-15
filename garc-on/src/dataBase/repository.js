const { MongoClient } = require('mongodb');

module.exports = () => {

    const repository = {}

    repository.conectar = async () => {
        const uri = "mongodb://milene:12345@cluster0-shard-00-00.662hk.mongodb.net:27017,cluster0-shard-00-01.662hk.mongodb.net:27017,cluster0-shard-00-02.662hk.mongodb.net:27017/garcon?ssl=true&replicaSet=atlas-gr7imv-shard-0&authSource=admin&retryWrites=true&w=majority";
        var client = MongoClient.connect(uri);

        return client;
    }

    return repository;
}