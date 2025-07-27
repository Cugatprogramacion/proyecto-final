import Project from '../models/Project.js';

const getAll = async () => {
  return await Project.find();
};

export default { getAll };