import React from 'react';
import './Section1.css';
import TypingText from './TypingText';

class Section1 extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 0,
    };
  }

  componentDidMount() {
    this.myAge();
  }

  myAge() {
    const today = new Date();
    const birthday = new Date('1998-08-20');
    const diff = today.getTime() - birthday.getTime();
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    this.setState({ age });
    console.log(age);
    return age;
  }

  render() {
    const { age } = this.state;

    return (
      <section className="section-1">
        <div className="container">
          <TypingText />
          <p>
            Sou <strong>fascinado por tecnologia</strong>. Acredito que ela é o caminho para <em>mudar o mundo!</em> Comecei a programar
            por volta dos meus 12 anos (hoje tenho <strong>{age}</strong>), quando procurei
            engines para desenvolvimento de jogos e lidei pela primeira vez com
            <strong> scripts e lógica de programação</strong>. Desde então, fui <strong>autodidata em Ruby</strong>
            e tive algum contato com diversas linguagens de programação pelo
            caminho, como <strong>C#, Java, Lua</strong> e outras tecnologias relacionadas, como
            banco de dados <strong>MySQL</strong>, <strong>PHP</strong> e <strong>HTML</strong>.
          </p>
          <p>
            Durante esse tempo, desenvolvi alguns jogos 2D e meu primeiro
            projeto web (também meu primeiro projeto que não era um jogo): um
            <strong> sistema de controle de estoque para uma oficina mecânica em minha cidade natal, Itamarandiba/MG</strong>. Ali percebi que, independentemente da
            área relacionada, me sentia realizado profissionalmente enquanto
            <strong> programava!</strong>
          </p>
          <p>
            Escolhi fazer uma faculdade de engenharia para ter mais oportunidades
            de aprimorar meu conhecimento em programação em uma área que eu
            gostava (mineração), mas acabei percebendo que talvez esse não fosse
            o melhor caminho. Pausei o curso de engenharia e iniciei um curso de
            <strong> Desenvolvimento Web na Trybe</strong>, que estou cursando atualmente e com
            previsão de formatura em novembro de 2023.
          </p>
          <p>
            Hoje posso dizer que o <strong>desenvolvimento web divide um espaço no meu
            coração com o desenvolvimento de jogos!</strong>
          </p>
        </div>
        <div className='skills'>
          <div className='hard-skills'>
            <h1>Hard Skills</h1>
            <ul>
              <li>React.js</li>
              <li>Jest</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Git &amp; GitHub</li>
              <li>Unix &amp; Bash</li>
              <li>Ruby</li>
            </ul> 
          </div>
          <div className='soft-skills'>
            <h1>Soft Skills</h1>
            <ul>
              <li>Colaboração</li>
              <li>Assertividade</li>
              <li>Metodologias ágeis</li>
              <li>Scrum</li>
              <li>Kanban</li>
              <li>Boa comunicação</li>
              <li>Muita vontade de aprender!</li>
            </ul> 
          </div>
        </div>
      </section>
    );
  }
}

export default Section1;
