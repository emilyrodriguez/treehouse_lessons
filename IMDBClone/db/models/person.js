const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Person extends Sequelize.Model {}
  Person.init({
  	firstName: {
  		type: Sequelize.STRING,
    	allowNull: false,
    	validate: {
    		notNull: {
	          msg: 'First name cannot be blank.',
	        },
    		notEmpty: {
    			msg: "First name cannot be blank.",
    		}
    	}
  	},
  	lastName: {
  		type: Sequelize.STRING,
    	allowNull: false,
    	validate: {
    		notNull: {
	          msg: 'Last name cannot be blank.',
	        },
    		notEmpty: {
    			msg: "Last name cannot be blank.",
    		}
    	}
  	},

  }, { sequelize });

  return Person;
};