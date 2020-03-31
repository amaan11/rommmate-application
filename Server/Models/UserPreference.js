import Sequelize from "sequelize";
import { sequelize } from "../utils/config";
import { User } from "./User"

const UserPreference = sequelize.define("user_preferences", {
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
    max_rent: {
        type: Sequelize.BIGINT,
        allowNull: true,
    },
    movein_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    type_of_place: {
        type: Sequelize.ENUM,
        values: ['room', 'entire-place', 'roommate', 'tenant'],
        allowNull: true
    },
    place_location: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cleaning_apartment: {
        type: Sequelize.ENUM,
        values: ['room', 'entire-place', 'roommate', 'tenant'],
        allowNull: true
    },
    guests: {
        type: Sequelize.ENUM,
        values: ['no', 'only-during-day', 'any-time'],
        allowNull: true
    },
    pets: {
        type: Sequelize.ENUM,
        values: ['no-pet', 'own-a-pet', 'depend-on-the-pet', 'no-problem'],
        allowNull: true
    },
    smoking: {
        type: Sequelize.ENUM,
        values: ['yes', 'no'],
        allowNull: true
    },
    interest: {
        type: Sequelize.STRING,
        allowNull: true,
        get() {
            return this.getDataValue('interest').split(',')
        },
        set(val) {
            this.setDataValue('interest', val.join(','));
        },
    }
},
    {
        indexes: [
            {
                unique: true,
                fields: ['user_id']
            }
        ]
    });
// UserPreference.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });


export { UserPreference }
