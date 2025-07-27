import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import projectRoutes from './routes/projectRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB conectado');
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
  })
  .catch(err => console.error(err));