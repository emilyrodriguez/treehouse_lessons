const db = require('./db');
const { Movie, Person } = db.models;
const { Op } = db.Sequelize;

(async () => {
  await db.sequelize.sync({ force: true });

  try {
    const movie = await Movie.create({
      title: 'Toy Story',
      runtime: 81,
      releaseDate: '1995-11-22',
      isAvailableOnVHS: true,
    });
    console.log(movie.toJSON());

    const movie2 = await Movie.create({
      title: 'The Incredibles',
      runtime: 115,
      releaseDate: '2004-04-14',
      isAvailableOnVHS: true,
    });
    console.log(movie2.toJSON());

    const movie3 = await Movie.create({
      title: 'Toy Story 3',
      runtime: 103,
      releaseDate: '2010-06-18',
      isAvailableOnVHS: false,
    });
    console.log(movie3.toJSON());

    // New Person record
    const person = await Person.create({
      firstName: 'Tom',
      lastName: 'Hanks',
    });
    console.log(person.toJSON());

    const person2 = await Person.create({
	  firstName: 'Brad',
	  lastName: 'Bird',
	}); 
	console.log(person2.toJSON());

	//Updating records
	const toyStory3 = await Movie.findByPk(3);
	toyStory3.isAvailableOnVHS = true;
    await toyStory3.save();

    console.log( toyStory3.get({ plain: true }) );

    //Deleting records
    const toyStory = await Movie.findByPk(1);

    await toyStory.destroy();

    const movies = await Movie.findAll();
    console.log( movies.map(movie => movie.toJSON()) );


  } catch (error) {
   	if (error.name === 'SequelizeValidationError') {
      const errors = error.errors.map(err => err.message);
      console.error('Validation errors: ', errors);
    } else {
    	throw error;
    }
  }
})();
