import React, { useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
