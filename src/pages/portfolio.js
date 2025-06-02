import React from "react"
import Layout from "../components/Layout/Layout"
import "./portfolio.css"
import SiteMetaData from "../components/SiteMetaData/SiteMetaData"

const Portfolio = () => {
  const projects = [
    {
      title: "Tally",
      description: "A full-stack savings tracker app built with Next.js",
      technologies: ["TypeScript", "Next.js", "Prisma", "Tailwind CSS"],
      image: "/tally-mu.vercel.app.png",
      link: "https://tally-mu.vercel.app/"
    },
    {
      title: "Isaac Mabula Challenge",
      description: "A race website for the Isaac Mabula Challenge",
      technologies: ["Netlify Functions", "JavaScript", "Tailwind CSS", "Firebase Storage"],
      image: "/isaacmabulachallenge.co.za.png",
      link: "https://isaacmabulachallenge.co.za/"
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