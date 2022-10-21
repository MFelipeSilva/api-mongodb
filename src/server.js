import express from 'express';
import dotenv from 'dotenv';
import database from './config/database/database.js';
import routes from './routes/routes.js'
const app = express();

dotenv.config();
database();

app.use(express.json());

app.use('/api/users', routes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
})