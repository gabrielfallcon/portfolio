import React, { useState } from 'react'
import { FiLinkedin, FiGithub, FiMail, FiArrowRight, FiSmile } from 'react-icons/fi'

import ContentNav from '../../components/ContentNav'

import { Header, Container, ContentImage, ContentAbout } from './styles'

const Home = () => {
  const [services, setServices] = useState(true)
  const [about, setAbout] = useState(false)
  const [contact, setContact] = useState(false)

  const handleService = () => {
    setServices(true)
    setAbout(false)
    setContact(false)
  }

  const handleAbout = () => {
    setAbout(true)
    setServices(false)
    setContact(false)
  }

  const handleContact = () => {
    setContact(true)
    setServices(false)
    setAbout(false)
  }

  return(
    <Container>
      <Header>
        <ContentImage>
          <img src="#" alt="gabrieljs"/>

          <h1>Gabriel Nascimento.</h1>

          <ul className="rede-social">
            <li><a target="_blank" href="https://www.linkedin.com/in/frontgabriel/"><FiLinkedin size={26} /></a></li>
            <li><a target="_blank" href="https://github.com/gabrielfallcon"><FiGithub size={26} /></a></li>
            <li><a href="mailto:gabriel.nascimenton.19@gmail.com"><FiMail size={26} /></a></li>
          </ul>
        </ContentImage>

        <ContentAbout>
          <ul className="nav">
            <li onClick={handleService}>Services</li>
            <li onClick={handleAbout}>Works</li>
            <li onClick={handleContact}>About</li>
          </ul>

          {services === true && (
            <div className="introduction" 
              value={services} 
              onChange={e => setServices(e.target.value)}
            >
              <h3> - Introduction</h3>
      
              <h2>Frontend Developer, based in São Paulo.</h2>
      
              <p>
                I am a Frontend Developer, graduated in System Analysis 
                I work in the area for more than 1 year and I am passionate 
                about technology and all the latest
              </p>
      
              <a href="#">
                My story  <FiArrowRight size={26} />
              </a>
            </div>  
          )}

          {about === true && (
            <div className="introduction" 
              value={about} 
              onChange={e => setAbout(e.target.value)}
            >
              <h3> - Introduction</h3>
      
              <h2>Tá, mas quem é Gabriel?</h2>
      
              <p>
                Tenho 20 anos, sou do tipo que ama praticar esportes como luta, futebol
                Parkour, Atletismo, Salto em Altura, gosto de estar vivenciando 
                coisas novas! sou evangélico, e não.. [<span className="coff">não gosto de café <FiSmile size={20}/></span>]
              </p>
            </div> 
          )}

          {contact === true && (
            <div className="introduction"
            value={contact} 
            onChange={e => setContact(e.target.value)}
            >

              <h2>Mande-me uma menssagem e Negociamos</h2>
      
              <p>
                I am a Frontend Developer, graduated in System Analysis 
                I work in the area for more than 1 year and I am passionate 
                about technology and all the latest
              </p>
      
              <a href="#">
                My story  <FiArrowRight size={26} />
              </a>
            </div>
          )}
          
        </ContentAbout>
      </Header>

    </Container>
  )
}

export default Home