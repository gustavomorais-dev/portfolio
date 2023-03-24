import React from 'react';
import './ProjectCard.css';

class ProjectCard extends React.Component {
  render() {
    const { image, name, description, githubLink, demoLink, hashtags } = this.props;
    
    return (
      <div className="project-card">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="project-card-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">Github</a>
          <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
        </div>
        <div className="hashtags">
          {hashtags.map(hashtag => (
            <span key={hashtag}>#{hashtag}</span>
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectCard;
