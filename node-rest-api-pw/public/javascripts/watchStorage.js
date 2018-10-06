class WatchList {
        
    constructor(){
        this.watchList = [];
        this.watchList[1] = JSON.stringify({Marca:"Rolex",
                                        Modelo:"Aquamaster",
                                        Tipo:"Casual",
                                        Año:"2019",
                                        Diametro:"42 mm",
                                        Imagen: "URL-EMPTY"});
        this.watchList[2] = JSON.stringify({Marca:"Omega",
                                        Modelo:"Aquaracer",
                                        Tipo:"Formal",
                                        Año:"2015",
                                        Diametro:"46 mm",
                                        Imagen: "URL-EMPTY"});
    
        this.watchList[3] = JSON.stringify({Marca:"Bulova",
                                        Modelo:"CURV",
                                        Tipo:"Casual",
                                        Año:"2017",
                                        Diametro:"38 mm",
                                        Imagen: "URL-EMPTY"});

    }
    create(body){

        return;
    }
    findById(id){
        console.log('in find by id');
        console.log(id);
        console.log(JSON.stringify(this.watchList));
        if(id)
        {
            console.log(this.watchList[id])
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
    findByIdAndUpdate(){

        return;
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