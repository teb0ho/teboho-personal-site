import React from "react"
import Layout from "../components/Layout/Layout"
import "./portfolio.css"
import SiteMetaData from "../components/SiteMetaData/SiteMetaData"

const Portfolio = () => {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of the project and its key features.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://via.placeholder.com/400x300",
      link: "#"
    },
    {
      title: "Project Two",
      description: "Another exciting project showcasing different skills and technologies.",
      technologies: ["Python", "Django", "PostgreSQL"],
      image: "https://via.placeholder.com/400x300",
      link: "#"
    },
    {
      title: "Project Three",
      description: "A full-stack application demonstrating modern web development practices.",
      technologies: ["TypeScript", "Next.js", "GraphQL"],
      image: "https://via.placeholder.com/400x300",
      link: "#"
    }
  ]

  return (
    <Layout>
      <SiteMetaData />
      <div className="portfolio container">
        <h1>My Portfolio</h1>
        <p className="portfolio-intro">
          Here are some of the projects I've worked on. Each project represents
          different challenges and learning experiences in my journey as a developer.
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="button-primary project-link">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio 