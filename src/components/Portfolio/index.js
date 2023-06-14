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

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
      setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['Kaiky','','Lopes','','Fernandes']}
              idx={20}
            />
          </h1>
          <p>

<br/>
Brasileiro, 19 anos, solteiro
<br/>
Endereço: Rua das Damasqueiras, Jardim Petrópolis, Cotia /SP
<br/>
Telefone:(11) 944611524 Celular: (11) 988957112
<br/>
E-mail: Kaikylopesfernandes1508@gmail.com
<br/>
<br/>
Área de Atuação:
<br/>
Suporte Técnico – Assistente Administrativo – Programação jovem Aprendiz – Vendas: 
Repositor - Caixa - Auxiliar de produção – Ajudante geral.
<br/>
<br/>
Formação:
<br/>
Escola: Etec de Cotia.
Curso: Ensino médio integrado ao curso técnico de desenvolvimento de sistemas (cursando)
Período: 01/02/2021 à 31/12/2023
<br/>
Cursos:
<br/>
Escola: Infornet - Unidade Cotia
Curso: curso de informática (completo)
Período: 10/06/2018 à 15/12/2020
<br/>
Escola: Novotec expresso – Unidade de São Paulo 
Curso: Ajudante de logística (completo)
Período: 13/08/2021 à 04/01/2022
<br/>
Escola: Fundação Bradesco – Online 
Curso: HTML básico (completo)
Período: 10/06/2021 à 10/06/2021
<br/>

<br/>

<br/>

<br/>

<br/>

<br/>

<br/>



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

export default Portfolio