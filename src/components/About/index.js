import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
      setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
  });

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['Q','u','a','l','i','f','i','c','a','ç','õ','e','s']}
              idx={15}
            />
          </h1>
          <p>
•Conhecimento nas linguagens de programação HTML, C#, CSS , desenvolvimento de
aplicativos android;
<br/>
• Conhecimento do Banco de dados Mysql;
<br/>
• Ótimo relacionamento interpessoal;
<br/>
• Suporte Técnico;
<br/>
• Montagem de banco de Dados;
<br/>
• Conhecimento em navegação na Internet, edição de textos, planilha eletrônica e
apresentação de slides utilizando o Sistema Operacional Windows e aplicativos do
pacote Office como Word, Excel e Power Point;
<br/>
• Design Básico.
<br/>
• Planejamento de Recursos Materiais.
<br/>
• Movimentação e Expedição de Materiais.


          </p>
          <p align="LEFT">
           
          </p>
          <p>
           
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About