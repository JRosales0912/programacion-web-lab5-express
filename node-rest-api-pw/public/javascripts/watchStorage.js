class WatchList {
        
    constructor(){
        this.watchList = [];
        this.watchList[0] = JSON.stringify({Marca:"Rolex",
                                        Modelo:"Aquamaster",
                                        Tipo:"Casual",
                                        Año:"2019",
                                        Diametro:"42 mm",
                                        Imagen: "URL-EMPTY"});
        this.watchList[1] = JSON.stringify({Marca:"Omega",
                                        Modelo:"Aquaracer",
                                        Tipo:"Formal",
                                        Año:"2015",
                                        Diametro:"46 mm",
                                        Imagen: "URL-EMPTY"});
    
        this.watchList[2] = JSON.stringify({Marca:"Bulova",
                                        Modelo:"CURV",
                                        Tipo:"Casual",
                                        Año:"2017",
                                        Diametro:"38 mm",
                                        Imagen: "URL-EMPTY"});

    }
    create(newItem){
        function compareNumbers(a, b) {
            return a - b;
          }
        const newId =   parseInt(Object.keys(this.watchList).sort(compareNumbers).pop())+1;
        this.watchList[newId] = JSON.stringify(newItem);

        return newId;
    }
    findById(id){
        if(id)
        {
            if(this.watchList[id])
            {
                return this.watchList[id];
            }
            else
            {
                return null;
            }
        }
        else
        {
            return this.watchList;
        }
    }
    findByIdAndUpdate(id, newItem){
        if(this.watchList[id])
        {
            this.watchList[id] = JSON.stringify(newItem);
            return true;
        }
        else
        {
            return false;
        }
    }
    findByIdAndRemove(id){
        if(this.watchList[id])
            {
                delete this.watchList[id];
                return true;
            }
            else
            {
                return false;
            }
        return;
    }
}

module.exports = new WatchList();