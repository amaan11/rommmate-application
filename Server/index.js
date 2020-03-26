import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import { sequelize } from './utils/config'

import authenticateToken from './Middleware/AuthenticateUser';

//Controllers
import UserController from "./Controllers/UserController"
import UserPreferenceController from "./Controllers/UserPreferenceController"
import UserProfileController from "./Controllers/UserProfileController"

const app = express();
// const server = http.createserver(app);

// JSON Request
app.use(bodyParser.json());

//CORS access

const corsOptions = {
    "origin": '*',
    "methods": ['GET', 'PUT', 'POST'],
    "allowedHaeders": ['Content-Type', 'Authorization'],
    "optionsSuccessStatus": 204
}
app.use(cors(corsOptions));


// URL encoded Form Request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all("*", authenticateToken)

// Controllers
app.use(UserController);
app.use(UserPreferenceController);
app.use(UserProfileController);


const port = process.env.port || 8000;

console.log(`Server running on port ${port}`)
sequelize
    .sync()
    .then(() => {
        app.listen(port);
    })
    .catch(error => console.log("error", error));

export default app;