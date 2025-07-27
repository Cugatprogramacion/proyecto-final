function ProjectCard({ project }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow rounded">
        <img src={project.image} className="card-img-top" alt={project.title} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body">
          <h5 className="card-title d-flex align-items-center gap-2">
            <img
              src="/images/logo-nc.png"
              alt="Logo"
              style={{ width: '24px', height: '24px' }}
            />
            {project.title}
          </h5>
          <p className="card-text">{project.description}</p>
          <a href={project.link} target="_blank" className="btn btn-primary w-100" rel="noopener noreferrer">
            Ver Proyecto
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;