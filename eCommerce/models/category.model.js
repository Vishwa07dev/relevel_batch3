/**
 * This file will contain the schema definition for 
 * the Category resource
 * 
 * We woould to export this schema to be called from other modules
 * 
 * 
 */

module.exports = (sequelize, Sequelize) =>{

    const Category = sequelize.define("category",{
        id :{

            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement :true
  
        },
        name :{
            type : Sequelize.STRING,
            allowNull : false

        },
        description :{
            type : Sequelize.STRING
        }
    },{
        
           tableName : 'categories'
        
    });

    return Category;

}