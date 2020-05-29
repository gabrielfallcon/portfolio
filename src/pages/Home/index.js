import React, { useState } from 'react'
import { FiLinkedin, FiGithub, FiMail, FiArrowRight, FiSmile } from 'react-icons/fi'

import { Header, Container, ContentImage, ContentAbout, Main, SectionTypeService } from './styles'

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

      <Main>
        <SectionTypeService>
          <div className="content">
            <div className="contact">
              <h3> - Contact</h3>
              
              <h2>Atendo Qualquer segmento</h2>

              <h4>
                Os preços sõa feito de acordo com a necessidade de cada projeto
                me envie um email e retornarei em breve!
              </h4>

              <a href="#">gabriel.nascimenton.19@gmail.com</a>
            </div>

            <div className="satisfied-clients">
              <h2>
                Você está precisando de um site criativo! 
                Aqui seu site e feito com todo cuidado nos maiores detalhes 
                prezamos muito pela usabilidade
              </h2>

              <h3>
                Não precisa ter duvida! atendemos alguns clientes que 
                ficaram felizes com nossos serviços!
              </h3>

              <ul className="clients">
                <li>
                  <h2><span>2</span>Anos de Experiêcia.</h2>
                </li>
                <li><h2><span>20</span>Clientes Satisfeitos.</h2></li>
              </ul>
            </div>
            
          </div>
          <div className="content">
            <div className="projects">
              <div className="item item-marketing-digital">
                <div className="title">
                  <h2>Produto Digital</h2>
                  <p>6 Projetos</p>
                </div>
              </div>
              <div className="item item-criação-arte">
                <div className="title">
                  <h2>Design Gráfico</h2>
                  <p>10 Projetos</p>
                </div>
              </div>
              <div className="item item-site">
                <div className="title">
                  <h2>Sites Institucionais</h2>
                  <p>4 Projetos</p>
                </div>
              </div>
            </div>
          </div>
        </SectionTypeService>
      </Main>
    </Container>
  )
}

export default Home