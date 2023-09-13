import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("deck", {
    id: {
      type: Sequelize.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id:{
        type: DataTypes.BIGINT,
    },
    title:{
        type: DataTypes.STRING,
    },
    description:{
        type: DataTypes.STRING,
    },
    card1:{
        type: DataTypes.STRING,
    },
    card2:{
        type: DataTypes.STRING,
    },
    card3:{
        type: DataTypes.STRING,
    },
    card4:{
        type: DataTypes.STRING,
    },
    card5:{
        type: DataTypes.STRING,
    },
    card6:{
        type: DataTypes.STRING,
    },
    card7:{
        type: DataTypes.STRING,
    },
    card8:{
        type: DataTypes.STRING,
    },
    card9:{
        type: DataTypes.STRING,
    },
    card10:{
        type: DataTypes.STRING,
    },
     card11:{
        type: DataTypes.STRING,
    },
    card12:{
        type: DataTypes.STRING,
    },

    card13:{
        type: DataTypes.STRING,
    },
    card14:{
        type: DataTypes.STRING,
    },
    card15:{
        type: DataTypes.STRING,
    },
    card16:{
        type: DataTypes.STRING,
    },
    card17:{
        type: DataTypes.STRING,
    },
    card18:{
        type: DataTypes.STRING,
    },
    card19:{
        type: DataTypes.STRING,
    },
    card20:{
        type: DataTypes.STRING,
    },
    card21:{
        type: DataTypes.STRING,
    },
    card22:{
        type: DataTypes.STRING,
    },
    card23:{
        type: DataTypes.STRING,
    },
    card24:{
        type: DataTypes.STRING,
    },
    card25:{
        type: DataTypes.STRING,
    },
    card26:{
        type: DataTypes.STRING,
    },
    card27:{
        type: DataTypes.STRING,
    },
    card28:{
        type: DataTypes.STRING,
    },
    card29:{
        type: DataTypes.STRING,
    },
    card30:{
        type: DataTypes.STRING,
    },
    
    card31:{
        type: DataTypes.STRING,
    },
    card32:{
        type: DataTypes.STRING,
    },
    card33:{
        type: DataTypes.STRING,
    },
    card34:{
        type: DataTypes.STRING,
    },
    card35:{
        type: DataTypes.STRING,
    },
    card36:{
        type: DataTypes.STRING,
    },
    card37:{
        type: DataTypes.STRING,
    },
    card38:{
        type: DataTypes.STRING,
    },
    card39:{
        type: DataTypes.STRING,
    },
    card40:{
        type: DataTypes.STRING,
    },
    card41:{
        type: DataTypes.STRING,
    },
    card42:{
        type: DataTypes.STRING,
    },
    card43:{
        type: DataTypes.STRING,
    },
    card44:{
        type: DataTypes.STRING,
    },
    card45:{
        type: DataTypes.STRING,
    },
    card46:{
        type: DataTypes.STRING,
    },
    card47:{
        type: DataTypes.STRING,
    },
    card48:{
        type: DataTypes.STRING,
    },
    card49:{
        type: DataTypes.STRING,
    },
    card50:{
        type: DataTypes.STRING,
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
  card.belongsTo(user);