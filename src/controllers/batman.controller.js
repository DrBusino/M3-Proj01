const actorService = require('../services/batman.service');

const showAllActorController = (req, res) => {
  const actors = actorService.showAllActorService();
  res.send(actors);
};

const findActorByIdController = (req, res) => {
  const idParams = +req.params.id;
  const findActorById = actorService.findActorByIdService(idParams);
  res.send(findActorById);
};

const createActorController = (req, res) => {
  const actor = req.body;
  const newActor = actorService.createActorService(actor);
  res.send(newActor);
};

const updateActorController = (req, res) => {
  const parametroId = req.params.id;
  const actorEdit = req.body;
  const updatedActor = actorService.updateActorService(parametroId, actorEdit);
  res.send(updatedActor);
};

const deleteActorController = (req, res) => {
  const parametroId = +req.params.id;
  actorService.deleteActorService(parametroId);
  res.send({ message: 'Info deletada com sucesso' });
};

module.exports = {
  showAllActorController,
  findActorByIdController,
  createActorController,
  updateActorController,
  deleteActorController,
};
