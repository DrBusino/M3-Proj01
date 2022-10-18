const route = require('express').Router();
const actorController = require('../controllers/batman.controller');

route.get ('/allActors', actorController.showAllActorController);
route.get('/findActor/:id' , actorController.findActorByIdController);
route.post('/create', actorController.createActorController);
route.put('/update/:id', actorController.updateActorController);
route.delete('/delete/:id', actorController.deleteActorController);


module.exports = route;
