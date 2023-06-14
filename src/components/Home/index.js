import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'
import O from 'gsap-trial/DrawSVGPlugin'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['o',
  'r',
  't ',
  'i',
  'f',
  'o',
  'l',
  'i',
  'o',
  '',
  '',
  'd',
  'e',
  '',]
  const jobArray = ['K','a','i','k','y','','','L', 'o', 'p', 'e', 's','','','F', 'e','r','n','a','n','d','e','s','','','',
    
  ]

  useEffect(() => {
      setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);
  });
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>O</span>
            <span className={`${letterClass} _12`}>l</span>
            <span className={`${letterClass} _13`}>à</span>
            <br />
            <span className={`${letterClass} _13`}>S</span>
            <span className={`${letterClass} _13`}>e</span>
            <span className={`${letterClass} _13`}>j</span>
            <span className={`${letterClass} _13`}>a</span>
            <br />
            <span className={`${letterClass} _13`}>B</span>
            <span className={`${letterClass} _13`}>e</span>
            <span className={`${letterClass} _13`}>m</span>
            <span className={`${letterClass} _13`}>-</span>
            <span className={`${letterClass} _13`}>V</span>
            <span className={`${letterClass} _13`}>i</span>
            <span className={`${letterClass} _13`}>n</span>
            <span className={`${letterClass} _13`}>d</span>
            <span className={`${letterClass} _13`}>o</span>
            <br />
            <span className={`${letterClass} _13`}>a</span>
            <span className={`${letterClass} _13`}>o</span>

            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Atribuições:Trabalho em equipe, criatividade, organização, automotivação, facilidade para aprender novos 
assuntos, proativo.</h2>
          <Link to="/contact" className="flat-button">
            Entre em contato
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home