var express = require('express');
var router = express.Router();
var Watches = require('../public/javascripts/watchStorage.js');

/* GET SINGLE PRODUCT BY ID */
router.get('/:watchId?', function(req, res, next) {
  var foundItems = null;
  if(req.params.watchId)
  {
    Watches.findById(req.params.watchId).then(
      function(docs) {
      res.status(200).send(JSON.stringify(docs));
      }
    ).catch(
      function(err) 
    {
      console.log(err);      
      res.status(404).send('No item was found with id: '+req.params.watchId);
    });
  }
  else
  {
    Watches.findById().then(
      function(docs) {
      res.status(200).send(JSON.stringify(docs));
      }
    ).catch(
      function(err) 
    {
      console.log(err);      
      res.status(404).send('No items were found ');
    });
  }
  
});

/* SAVE PRODUCT */
router.post('/', function(req, res, next) {
    Watches.create(req.body, function (err, post) {
    if (err) res.status(404).send("no se pudo agregar");
  })
    res.status(201).send("Elemento ha sido creado");
  ;
});

/* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
  Watches.findByIdAndUpdate(req.params.id, req.body).then(
    function(docs) {
    res.status(204);
    }
  ).catch(
    function(err) 
  {
    console.log(err);      
    res.status(404).send("Elemento "+req.params.id+" no fue encontrado");
  });
});

/* DELETE PRODUCT */
router.delete('/:id?', function(req, res, next) {
    Watches.findByIdAndRemove(req.params.id).then(
    function(docs) {
    res.status(200).send('Elemento eliminado: '+JSON.stringify(docs));
    }
  ).catch(
    function(err) 
  {
    console.log(err);      
    res.status(404).send("No se puede eliminar el elemento con id: "+req.params.id);
  });
});

module.exports = router;