import React, { useState, useRef, useEffect } from 'react'
import { FiLinkedin, FiGithub, FiMail, FiArrowRight, FiSmile, FiGlobe } from 'react-icons/fi'
import { TweenMax, Power3 } from 'gsap'
import ScrollMagic from 'scrollmagic'

import { 
  Header,
  Container, 
  ContentImage, 
  ContentAbout, 
  Main,
  SectionTypeService,
  Portfolio, 
  Recomendation,
  Footer,
  Rodape
} from './styles'

// import logo from '../../assets/logo.png'
import gabriel from '../../assets/gabriel.png'
import photo from '../../assets/teste.jpeg'
import photo2 from '../../assets/photo2.jpg'
import photo3 from '../../assets/photo3.jpg'
import photo4 from '../../assets/photo4.jpg'

const Home = () => {
  const [services, setServices] = useState(true)
  const [about, setAbout] = useState(false)
  const [contact, setContact] = useState(false)

  const [photo01, setPhoto01] = useState(true)
  const [photo02, setPhoto02] = useState(false)
  const [photo03, setPhoto03] = useState(false)
  const [photo04, setPhoto04] = useState(false)

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

  const handlePhoto01 = () => {
    setPhoto01(true)
    setPhoto02(false)
    setPhoto03(false)
    setPhoto04(false)
  }
  const handlePhoto02 = () => {
    setPhoto01(false)
    setPhoto02(true)
    setPhoto03(false)
    setPhoto04(false)
  }
  const handlePhoto03 = () => {
    setPhoto01(false)
    setPhoto02(false)
    setPhoto03(true)
    setPhoto04(false)
  }
  const handlePhoto04 = () => {
    setPhoto01(false)
    setPhoto02(false)
    setPhoto03(false)
    setPhoto04(true)
  }

  // useRef for Animation
  let nameTitle = useRef(null)
  let redesSociais = useRef(null)
  let navbarHome = useRef(null)
  let introducton = useRef(null) 

  const fadeName = () => {
    TweenMax.to(
      nameTitle,
      .8,
      {
        opacity: 1,
        marginLeft: 0,
        ease: Power3.easeOut
      } 
    )
  } 
  const fadeSocial = () => {
    TweenMax.to(
      redesSociais,
      .8,
      {
        opacity: 1,
        marginBottom: 0,
        ease: Power3.easeOut
      } 
    )
  }
  const fadeNavba = () => {
    TweenMax.to(
      navbarHome,
      .8,
      {
        opacity: 1,
        marginTop: 0,
        ease: Power3.easeOut
      } 
    )
  }
  const fadeIntroduction = () => {
    TweenMax.to(
      introducton,
      .8,
      {
        opacity: 1,
        marginBottom: 0,
        ease: Power3.easeOut
      } 
    )
  }
  useEffect(() => {
    fadeName()
    fadeSocial()
    fadeNavba()
    fadeIntroduction()
  },[])
  return(
    <Container>
      <Header>
        <div className="content">
          <ContentImage>
            <img src="#" alt="gabrieljs"/>

            <h1 ref={el => {nameTitle = el}}>Gabriel <br/> Nascimento.</h1>

            {/* <img src={gabriel} className="owner"/> */}

            <ul ref={el => {redesSociais = el}} className="rede-social">
              <li><a target="_blank" href="https://www.linkedin.com/in/frontgabriel/"><FiLinkedin size={26} /></a></li>
              <li><a target="_blank" href="https://github.com/gabrielfallcon"><FiGithub size={26} /></a></li>
              <li><a href="mailto:gabriel.nascimenton.19@gmail.com"><FiMail size={26} /></a></li>
            </ul>
          </ContentImage>

          <ContentAbout>
            <ul ref={el => {navbarHome = el}} className="nav">
              <li onClick={handleService}>Services</li>
              <li onClick={handleAbout}>Works</li>
              <li onClick={handleContact}>About</li>
            </ul>

            {services === true && (
              <div ref={el => {introducton = el}} className="introduction" 
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
        </div>
      </Header>

      <Main>
        <SectionTypeService id="typeService">
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
        <Portfolio id="portfolio">
          <div className="content">
            <div className="portfolio__desc">
              <h3> - Portfolio</h3>

              <h2>
                Alguns dos Projeto,<br />
                Criados
              </h2>

              <h4>
                Todos os projetos sã criados de forma original de acordo com sua preferêcia! 
              </h4>

              <a href="#">Explore mais <FiArrowRight size={20} /></a>

              <div className="portfolio-item">
                <div className="title">
                  <h2>E4i</h2>
                  <h3>Desenvolvimento web</h3>
                </div>
              </div>
            </div>
            <div className="portfolio__projects">
              <div className="portfolio-item">
                <div className="title">
                  <h2>E4i</h2>
                  <h3>Desenvolvimento web</h3>
                </div>
              </div>

              <div className="portfolio-item">
                <div className="title">
                  <h2>E4i</h2>
                  <h3>Desenvolvimento web</h3>
                </div>
              </div>
            </div>
          </div>
        </Portfolio>
        <Recomendation>
          {photo01 === true && (
            <div className="content">
              <div className="photo">
                <img src={photo} />
              </div>
              <div className="description">
                <FiGlobe size={50}/>
                <h2>
                  Gabriel é um profissional muito eficiente, sempre evoluindo
                  constantemente e em busca de novos conhecimentos, lhe desejo 
                  um ótimo secusso em sua trajetória!
                </h2>

                <h3 className="name">Flavio Bankers</h3>
                <h4 className="professeion">Frontend Developer</h4>

                <div className="dots">
                  <div onClick={handlePhoto01} className="dot" id="active"></div>
                  <div onClick={handlePhoto02} className="dot"></div>
                  <div onClick={handlePhoto03} className="dot"></div>
                  <div onClick={handlePhoto04} className="dot"></div>
                </div>
              </div>
            </div>
          )}
          {photo02 === true && (
            <div className="content">
              <div className="photo">
                <img src={photo2} />
              </div>
              <div className="description">
                <FiGlobe size={50}/>
                <h2>
                  Eu me impressiono com a vontade que Gabriel tem de crescer 
                  cada vez mais e mais em sua trajetóriatenho um prazer imensso 
                  de poder der trabalhado ao seu lado
                </h2>

                <h3 className="name">Marco reis</h3>
                <h4 className="professeion">Tech lead</h4>

                <div className="dots">
                  <div onClick={handlePhoto01} className="dot"></div>
                  <div onClick={handlePhoto02} className="dot" id="active"></div>
                  <div onClick={handlePhoto03} className="dot"></div>
                  <div onClick={handlePhoto04} className="dot"></div>
                </div>
              </div>
            </div>
          )}
          {photo03 === true && (
            <div className="content">
              <div className="photo">
                <img src={photo3} />
              </div>
              <div className="description">
                <FiGlobe size={50}/>
                <h2>
                  Ao longo de minha jornada conheci Gabriel pelo seu talento
                  no que faz desejo sucesso a sua carreira!
                </h2>

                <h3 className="name">Blenk Doss</h3>
                <h4 className="professeion">Frontend Enginer</h4>

                <div className="dots">
                  <div onClick={handlePhoto01} className="dot"></div>
                  <div onClick={handlePhoto02} className="dot"></div>
                  <div onClick={handlePhoto03} className="dot" id="active"></div>
                  <div onClick={handlePhoto04} className="dot"></div>
                </div>
              </div>
            </div>
          )}
          {photo04 === true && (
            <div className="content">
              <div className="photo">
                <img src={photo4} />
              </div>
              <div className="description">
                <FiGlobe size={50}/>
                <h2>
                  Gabriel é uma pessoa cuja esfoço é um de seus principios
                  tenho prazer em fazer parte de sua trajetória!
                </h2>

                <h3 className="name">Moira Lins</h3>
                <h4 className="professeion">CEO - Apple</h4>

                <div className="dots">
                  <div onClick={handlePhoto01} className="dot"></div>
                  <div onClick={handlePhoto02} className="dot"></div>
                  <div onClick={handlePhoto03} className="dot"></div>
                  <div onClick={handlePhoto04} className="dot" id="active"></div>
                </div>
              </div>
            </div>
          )}
          
        </Recomendation>
      
      </Main>
      <Footer>
        <div className="content">
          <div className="get-project">
            <h2>
              Tem um projeto? <br/>
              Vamos conversar.
            </h2>

            <h4>
              Não deixe para depois, o sucesso do seu negócio é
              a minha felicidade!
            </h4>

            <a href="#">gabriel.nascimenton.19@gmail.com <FiArrowRight size={25}/></a>
          </div>
          <div className="form">
            <h2>
              Já tem uma idéia? <br/>
              Deixe-me saber aqui.
            </h2>
            <form>
              <input type="text" placeholder="Qual seu nome?"/>
              <input type="text" placeholder="Qual seu e-mail?"/>
              <input type="text" placeholder="Qual seu projeto?"/>
              <button type="submit">Enviar<FiArrowRight size={30}/></button>
            </form>
          </div>
        </div>
        <Rodape>
          <img src=""/>

          <h4>Obrigado por chegar até aqui <FiSmile size={20}/></h4>

          <ul className="rede-social">
            <li><a target="_blank" href="https://www.linkedin.com/in/frontgabriel/"><FiLinkedin size={26} /></a></li>
            <li><a target="_blank" href="https://github.com/gabrielfallcon"><FiGithub size={26} /></a></li>
            <li><a href="mailto:gabriel.nascimenton.19@gmail.com"><FiMail size={26} /></a></li>
          </ul>

          <div className="faixa"></div>
        </Rodape>
      </Footer>
    </Container>
  )
}

export default Home