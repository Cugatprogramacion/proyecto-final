import projectService from '../services/projectService.js';

export const getProjects = async (req, res) => {
  try {
    const projects = await projectService.getAll();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};