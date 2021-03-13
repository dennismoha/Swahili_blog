const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
var db;

mongoConnect = (cb) => {

    MongoClient.connect(`mongodb+srv://admin:${process.env.mongoPassword}@admin.dzypr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { useUnifiedTopology: true }) //creating a connection to mongodb  
        .then((client) => {
            console.log('connection successfull')

            db = client.db() //returns an instance connection to our database
            console.log('the first value of _db is ', _db)
            cb()
        })
        .catch((error) => {
            throw new Error(error)
        })
}

const getDb = () => {
    console.log('the value of db is ', db)
        // if (_db) {
        //     return _db
        // }
        // throw new Error('no database found!')
}
module.exports = mongoConnect
module.exports = getDb