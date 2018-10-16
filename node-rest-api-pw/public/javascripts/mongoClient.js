db = require('mongojs');
class MongoClient
{
    constructor()
    {
        this.mongojs = db;
        this.db = this.mongojs('mongodb://localhost:27017/MongoWatches', ['WatchesCollection']);
    }

    create(newItem){

    this.db.WatchesCollection.save(newItem, function(err){
        if(err){
            return false;
        }
        else
        {
            return true;
        }
    });
    }
    findById(id){
        
    console.log('in client');
        var self = this;
        return new Promise(function(resolve, reject) {
            self.db.WatchesCollection.findOne({
                _id: self.db.ObjectId(id)
            },function (err, docs) {
                resolve(docs);
            });
        });
    }
    findAll()
    {
        var self = this;
        return new Promise(function(resolve, reject) {
            self.db.WatchesCollection.find(function (err, docs) {
                resolve(docs);
            });
        });

    }
    findByIdAndUpdate(id, newItem){

        var self = this;
        return new Promise(function(resolve, reject)
        {
            self.db.WatchesCollection.update({_id: self.mongojs.ObjectId(id)}, newItem, {}, function(err, item){
                if(err){
                    reject(err);
                }
                resolve(item);
            });
        });
        
    }
    findByIdAndRemove(id){
        var self = this;
        return new Promise( function(resolve, reject)
        {
            self.db.WatchesCollection.remove(
                {_id: self.mongojs.ObjectId(id)}, function(err, item){
                    if(err){
                        reject(err);
                    }
                    resolve(item);
                }
            )
        });
    }
} 


module.exports = new MongoClient();