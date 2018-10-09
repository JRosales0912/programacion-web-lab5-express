var express = require('express');
var router = express.Router();
var Watches = require('../public/javascripts/watchStorage.js');

/* GET SINGLE PRODUCT BY ID */
router.get('/:watchId?', function(req, res, next) {
  var foundItems = null;
  if(req.params.watchId)
  {
    foundItems = Watches.findById(req.params.watchId);
  }
  else
  {
    foundItems = Watches.findById(null);
  }
  if(foundItems)
  {
      res.status(200).send(JSON.stringify(foundItems));
  }
  else
  {
      res.status(404).send('No item was found with id: '+req.params.watchId);
  }
});

/* SAVE PRODUCT */
router.post('/', function(req, res, next) {
    const newId = Watches.create(req.body, function (err, post) {
    if (err) res.status(404).send("no se pudo agregar");
  })
    res.status(201).send("Elemento "+newId+"  ha sido creado");
  ;
});

/* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
  if(Watches.findByIdAndUpdate(req.params.id, req.body))
  {
    res.status(204).send("Elemento "+req.params.id+" modificado");
  }
  else
  {
    res.status(404).send("Elemento "+req.params.id+" no fue encontrado");
  };
});

/* DELETE PRODUCT */
router.delete('/:id?', function(req, res, next) {
  if(Watches.findByIdAndRemove(req.params.id))
  {
      res.status(204).send("Elemento "+req.params.id+" eliminado");
  }
  else
  {
      res.status(404).send("Elemento "+req.params.id+" no fue encontrado");
  };
});

module.exports = router;