import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Section2.css';

class Section2 extends React.Component {
  render() {
    return (
      <section className="section-2">
        <div className="container-section-2">
          <h1>Meus projetos</h1>
          <ProjectCard
            image='https://q4y2k3w9.rocketcdn.me/wp-content/uploads/edd/2022/03/materio-react-github-banner.png'
            name='Solar System'
            description='loremmmmmmmmmmmmm  sdafasdfs dfsf sdf sdfsd fsdfsdfsdf sdfsdf sdfsdfsdf sdfsdfsd fsdfsdfsd fs dfsdfsdf sdfsd fsdfsdfs fsdfsdfsdf'
            githubLink='https://q4y2k3w9.rocketcdn.me/wp-content/uploads/edd/2022/03/materio-react-github-banner.png'
            demoLink='https://q4y2k3w9.rocketcdn.me/wp-content/uploads/edd/2022/03/materio-react-github-banner.png'
            hashtags={['javascript', 'react.js']}
          />
        </div>
      </section>
    );
  }
}

export default Section2;
