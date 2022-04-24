const { DataTypes } = require("sequelize");

module.exports = (sequelize)=>{
    sequelize.define('admin',{
        id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		email: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true,
			validate: {
				isEmail:true,
                notEmpty:true,
                notNull:true,
                len: [5,256]
			}
		},
        password:{
            allowNull:false,
            type:DataTypes.STRING,
            validate:{
                notEmpty:true,
                notNull:true
            }
        },
        name:{
            allowNull:false,
            type:DataTypes.STRING,
            validate:{
                notEmpty:true,
                notNull:true
            }
        },
    });
};