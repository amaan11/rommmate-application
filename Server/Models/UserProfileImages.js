import Sequelize from "sequelize";
import { sequelize } from "../utils/config";
import { User } from "./User"

const UserProfileImages = sequelize.define("user_profile_images", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    image_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image_path: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image_type: {
        type: Sequelize.STRING,
        allowNull: true
    },
},
    {
        indexes: [
            {
                unique: true,
                fields: ['user_id']
            }
        ]
    });

UserProfileImages.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });

export { UserProfileImages }
