import Sequelize from "sequelize";

const secret =
    "6B04F47963F952D96B70924569CF8B9761EEE917AD648138A7207B6D125CA270";

const sequelize = new Sequelize({
    username: "root",
    password: "goldtree9",
    database: "roommate_App",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
const twilioCredentials = {
    accountSid: 'AC9cd915d37fd2426e03278989c4838dbc',
    authToken: '3c1f4677ee2b40249caefe8a098ff7bf',
    currentNumber: '+15038226630',
};


export { sequelize, secret, twilioCredentials }