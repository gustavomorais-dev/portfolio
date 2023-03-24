import React from 'react';
import './Navigation.css';
import PropTypes from 'prop-types';

class Navigation extends React.Component {
  render() {
    return (
      <div className='navigation-container'>
        <nav className="navigation">
          <a href="#sobre">Olá! 😄</a>
          <a href="#formacao">Formação</a>
          <a href="#skills">Skills</a>
          <a href="#experiencia">Experiência</a>
          <a href="#projetos">Meus Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    );
  }
}

Navigation.propTypes = {

};

export default Navigation;
