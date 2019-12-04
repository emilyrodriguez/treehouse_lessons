const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
  	id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
    	type: Sequelize.STRING,
    	allowNull: false,
    	validate: { 
    		notNull: {
	          msg: 'Title cannot be blank.',
	        },
    		notEmpty: {
    			msg: "Title cannot be blank.",
    		}
    	},
    },
    runtime: { 
    	type: Sequelize.INTEGER,
    	allowNull: false,
    	validate: { 
    		notNull: {
	          msg: 'Please provide a value for "runtime".',
	        },
	        min: {
	        	args: 1,
	        	msg: "Runtime must be greater than 0 minutes.",
	        },
    	},
    },
    releaseDate: { 
    	type: Sequelize.DATEONLY,
    	allowNull: false,
    	validate: { 
    		notNull: {
	          msg: 'Please provide a value for "releaseDate".',
	        },
	        isAfter: {
	        	args: '1895-12-27',
          		msg: 'Release date must be after "1895-12-28".',
	        },
    	},
    },
    isAvailableOnVHS: { 
    	type: Sequelize.BOOLEAN,
    	allowNull: false,
    	defaultValue: false,
    	validate: { },
    },
  }, { 
  	paranoid: true,
  	sequelize 
  });

  return Movie;
};