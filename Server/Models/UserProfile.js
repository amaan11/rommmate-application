import Sequelize from "sequelize";
import { sequelize } from "../utils/config";
import { UserProfileImages } from "./UserProfileImages";
import { User } from "./User";

const UserProfile = sequelize.define("user_profile", {
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
    full_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birth_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    phone_number: {
        type: Sequelize.STRING,
        allowNull: false
    },
    otp: {
        type: Sequelize.INTEGER(5),
        allowNull: false
    },
    profession: {
        type: Sequelize.STRING,
        allowNull: false
    },
    work_location: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_info: {
        type: Sequelize.STRING,
        allowNull: false
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

// UserProfile.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });

const createProfile = async (data) => {
    const { fullName, gender, birthDate, phoneNumber, profession, workLocation, userInfo, profileImages, userId } = data
    let response = {}
    try {
        await sequelize.transaction(async (t) => {
            await UserProfile.create({
                user_id: userId,
                full_name: fullName,
                gender: gender,
                birth_date: birthDate,
                phone_number: phoneNumber,
                profession: profession,
                work_location: workLocation,
                user_info: userInfo
            }, { transaction: t });
            profileImages.forEach(async (image) => {
                await UserProfileImages.create({
                    user_id: userId,
                    image_name: image.imageName ? image.imageName : '',
                    image_path: image.imagePath ? image.imagePath : '',
                    image_type: image.imageType ? image.imageType : ''
                }, { transaction: t })
            })
            response['isSuccess'] = true
            response['data'] = 'User Profile Created!'
        }
        )
    }
    catch (error) {
        response['isSuccess'] = false
        response['data'] = 'Something went wrong!'
    }
    return response;
}
export { UserProfile, createProfile }
