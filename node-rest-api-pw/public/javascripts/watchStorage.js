class WatchList {
        
    constructor(){
        this.MongoClient = require('./mongoClient.js');
        this.watchList = [];

    }
    create(newItem){
        console.log(newItem);
        return this.MongoClient.create(newItem);
    }
    findById(id){
        if(id)
        {
            return this.MongoClient.findById(id)
        }
        else
        {
            return this.MongoClient.findAll();
        }
    }
    findByIdAndUpdate(id, newItem){
        return this.MongoClient.findByIdAndUpdate(id, newItem);
    }
    findByIdAndRemove(id){
        return this.MongoClient.findByIdAndRemove(id);
    }
}

module.exports = new WatchList();