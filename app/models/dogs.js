
//model definition 
module.exports = function(sequelize, DataTypes) {
  var Dogs = sequelize.define("Dogs", {
    eyeColorOne: {type: DataTypes.STRING,
        validate: {
            len: [1, 1],
            isIn: [['B', 'b']],
            notEmpty: true
        }},
    eyeColorTwo: {type: DataTypes.STRING,
        validate: {
            len: [1, 1],
            isIn: [['B', 'b']],
            notEmpty: true
        }},
    coatColorOne: {type: DataTypes.STRING,
        validate: {
            len: [1, 1],
            isIn: [['G', 'W']],
            notEmpty: true
        }},
    coatColorTwo: {type: DataTypes.STRING,
        validate: {
            len: [1, 1],
            isIn: [['G', 'W']],
            notEmpty: true
        }},
    tailLengthOne: {type: DataTypes.STRING,
        validate: {
            len: [1, 1],
            isIn: [['L', 'S']]
        }},
    tailLengthTwo: {type: DataTypes.STRING,
        validate: {
            len: [1, 1],
            isIn: [['L', 'S']]
        }},    
    tongueOne: {type: DataTypes.STRING,
        validate: {
            len: [1, 1],
            isIn: [['T', 't']]
        }},
    tongueTwo: {type: DataTypes.STRING,
        validate: {
            len: [1, 1],
            isIn: [['T', 't']]
        }},    
    sexOne: {type: DataTypes.STRING,
        defaultValue: 'X',
        validate: {
            len: [1, 1],
            isIn: [['X']]
        }},
    sexTwo: {type: DataTypes.STRING,
        validate: {
            len: [1, 1],
            isIn: [['X', 'Y']]
        }},    
    genoType: {type: DataTypes.STRING,validate: {len: [8, 8], is: ["^[a-z]+$", 'i']}},
    huskyImage: {type: DataTypes.STRING}
  });
  return Dogs;
};