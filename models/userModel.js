import { Sequelize } from "sequelize";
import db from "../db.js";
export default db.define("user", {
    id: {
      type: Sequelize.DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name:{},
    age:{
        type: DataTypes.INTEGER,
    },
    email:{
        type: DataTypes.STRING,
    },
    email_verified_at:{
        type:DataTypes.DATE,
    },
    password:{
        type: DataTypes.STRING,
    },
    remember_token:{
        type:DataTypes.STRING(100) 
    },
    created_at:{
        type:DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at:{
        type:DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
  });
  user.hasMany(card, {
    foreignKey: 'user_Id'
  });
