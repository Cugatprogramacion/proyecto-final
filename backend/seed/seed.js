import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from '../models/Project.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

const seedProjects = [
  {
    title: 'Github',
    description: 'Mi Repositorio de Github .',
    image: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
    link: 'https://github.com/Cugatprogramacion/Trabajofinal'
  },
  {
    title: 'Institucion donde aprendi',
    description: 'Donde esta mi mentor',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlqQrN-PbEj1fGtG0lOIgIpjQ8D2cOksZ7w&s',
    link: 'https://globalacademyoficial.com/'
  }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    await Project.deleteMany({});
    await Project.insertMany(seedProjects);
    console.log('Datos insertados');
    mongoose.disconnect();
  })
  .catch(err => console.error(err));