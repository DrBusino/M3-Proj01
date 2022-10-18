const actors = [
  {
    id: 1,
    name: `Adam West`,
    picture: `https://images.immediate.co.uk/production/volatile/sites/3/2022/07/batman-adam-west-6f2e817.jpg?quality=90&webp=true&fit=975,649`,
    movies: [
      {
        movieName: `Batman`,
        movieYear: 1966,
      },
    ],
  },

  {
    id: 2,
    name: `Michael Keaton`,
    picture: `https://images.immediate.co.uk/production/volatile/sites/3/2021/01/Michael_Keaton_Batman-54f2567.jpg?quality=90&webp=true&fit=620,413`,
    movies: [
      {
        movieName: `Batman`,
        movieYear: 1989,
      },

      {
        movieName: `Batman Returns`,
        movieYear: 1992,
      },
    ],
  },

  {
    id: 3,
    name: 'Kevin Conroy',
    picture: `https://images.immediate.co.uk/production/volatile/sites/3/2022/07/kevin-conroy-batman-9bb8317.jpg?quality=90&webp=true&fit=975,649`,
    movies: [
      {
        movieName: `Batman: Mask of the Phantasm`,
        movieYear: 1993,
      },
    ],
  },

  {
    id: 4,
    name: `Val Kilmer`,
    picture: `https://images.immediate.co.uk/production/volatile/sites/3/2022/07/val-kilmer-batman-forever-cb74c7d.jpg?quality=90&webp=true&fit=975,649`,
    movies: [
      {
        movieName: `Batman Forever`,
        movieYear: 1995,
      },
    ],
  },

  {
    id: 5,
    name: `George Clooney`,
    picture: `https://images.immediate.co.uk/production/volatile/sites/3/2022/07/batman-robin-clooney-01f5d7a.jpg?quality=90&webp=true&fit=975,649`,
    movies: [
      {
        movieName: `Batman & Robin`,
        movieYear: 1997,
      },
    ],
  },

  {
    id: 6,
    name: `Christian Bale`,
    picture: `https://images.immediate.co.uk/production/volatile/sites/3/2022/07/batman-dark-knight-rises-christian-bale-19b119a.jpg?quality=90&webp=true&fit=975,649`,
    movies: [
      {
        movieName: `Batman Begins`,
        movieYear: 2005,
      },
      {
        movieName: `The Dark Knight`,
        movieYear: 2008,
      },
      {
        movieName: `The Dark Knight Rises`,
        movieYear: 2012,
      },
    ],
  },
  {
    id: 7,
    name: `Ben Affleck`,
    picture: `https://images.immediate.co.uk/production/volatile/sites/3/2022/07/batman-v-superman-ben-affleck-22b374a.jpg?quality=90&webp=true&fit=975,649`,
    movies: [
      {
        movieName: `Batman v Superman: Dawn of Justice`,
        movieYear: 2016,
      },
      {
        movieName: `Suicide Squad`,
        movieYear: 2016,
      },
      {
        movieName: `Justice League`,
        movieYear: 2017,
      },
      {
        movieName: `Zack Snyder's Justice League`,
        movieYear: 2021,
      },
    ],
  },
  {
    id: 8,
    name: `Will Arnett`,
    picture: `https://images.immediate.co.uk/production/volatile/sites/3/2022/07/lego-batman-movie-e06637e.jpg?quality=90&webp=true&fit=975,649`,
    movies: [
      {
        movieName: `The Lego Batman Movie`,
        movieYear: 2017,
      },
    ],
  },
  {
    id: 9,
    name: `Robert Pattinson`,
    picture: `https://images.immediate.co.uk/production/volatile/sites/3/2022/07/batman-robert-pattinson-8590087.jpg?quality=90&webp=true&fit=975,649`,
    movies: [
      {
        movieName: `The Batman`,
        movieYear: 2022,
      },
    ],
  },
];







const showAllActorService = () =>{
    return actors;
};

const findActorByIdService = (idParams) =>{
   return actors.find((actor) => actor.id === idParams)
};

const createActorService = (actor) => {
  const newId = actors.length + 1;
  actor.id = newId;
  actors.push(actor);
  return actor;
};

const updateActorService = (idActor, actorEdit) => {
  actorEdit['id'] = idActor;
  const actorIndex = actors.findIndex((actor) => actor.id == idActor);
  actors[actorIndex] = actorEdit;
  return actorEdit;
};

const deleteActorService = (parametroId) => {
  const actorIndex = actors.findIndex((e) => e.id == parametroId);
  return actors.splice(actorIndex, 1);
};



module.exports = {
  showAllActorService,
  findActorByIdService,
  createActorService,
  updateActorService,
  deleteActorService,
};
