import styled from 'styled-components'


export const Container = styled.div`

`;

export const Header = styled.header`
  width: 100%;
  height: 100%;
  max-height: 800px;
  background: #333646;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 60%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContentImage = styled.div`
  width: 100%;
  max-width: 800px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  position: relative;

  h1 {
    font-size: 74px;
    color: #FAFAFA;
    z-index: 888;
    opacity: 0;
    margin-left: -100%;

    &::after {
      content: ' ';
      width: 40px;
      border-bottom-width:8px;
      border-bottom-style: solid;
      border-bottom-color: #ffc25c;
      background-color: #333646;
      display:table-cell;
      width:80px;
    }
  }

  .owner {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 400px;
  }

  ul.rede-social {
    display: flex;
    list-style: none;
    z-index: 888;
    opacity: 0;
    margin-bottom: -18%;

    li {
      & + li {
        margin-left: 30px;
      }
      a {
        color: #FAFAFA;
        text-decoration: none;

        svg {
          color: #ffc25c;
        }
      }
    }
  }
`;

export const ContentAbout = styled.div`
  width: 100%;
  max-width: 500px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  position: relative;
  margin-left: 10px;

  ul.nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    margin-top: -50%;
    opacity: 0;
    
    li {
      & + li {
        margin-left: 10px;
      }

      font-size: 36px;
      color: #FAFAFA;
      font-weight: 500;
      cursor: pointer;

      &:focus {
        border-bottom: 2px solid #ffc25c;
      }
    }
  }

  .introduction {
    margin-bottom: -100%;

    h3 {
      font-size: 18px;
      color: #858790;
      letter-spacing: 3px;
    }

    h2 {
      font-size: 36px;
      font-weight: 400;
      color: #FAFAFA;
      margin: 40px 0px 25px 0px;  
    }

    p {
      width: 100%;
      font-size: 16px;
      color: #a8a9b0;
      line-height: 24px;
      margin-bottom: 40px;
    }

    > a {
      font-size: 26px;
      color: #ffc25c;
      position: absolute;
      text-decoration: none;

      svg {
        margin-left: 25px;
      }
    }
  }
`;

export const Main = styled.main`
  height: auto;
  padding: 0px;
  display: flex;
  flex-direction: column;
`;

export const SectionTypeService = styled.section`
  width: 100%;
  height: 100%;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  background-color: #252734;
  position: relative;

  .content {
    margin: 0 auto;
    width: 60%;
    padding: 40px 0px;
    display: flex;
    justify-content: space-between;
    position: relative;

    .contact {
      width: 40%;
      text-align: start;

      > h3 {
        font-size: 16px;
        color: #8c8d94;
        margin-bottom: 20px;
        letter-spacing: 3px;
        font-weight: 400;
      }
      h2 {
        width: 250px;
        font-size: 30px;
        color: #FAFAFA;
        margin-bottom: 30px;
        font-weight: 400;
      }
      h4 {
        width: 310px;
        font-size: 14px;
        color: #9d9ea4;
        margin-bottom: 50px;
      }
      a{
        font-size: 20px;
        text-decoration: none;
        color: #ffaf29;
        font-weight: bold;
      }
    }

    .satisfied-clients {
      width: 40%;
      text-align: start;

      h2 {
        width: 80%;
        font-size: 30px;
        color: #FAFAFA;
        font-weight: 400;
        margin-bottom: 30px;

      }
      h3 {
        width: 350px;
        font-size: 14px;
        color: #9d9ea4;
        margin-bottom: 40px;
      }

      ul.clients {
        display: flex;
        justify-content: flex-start;

        li {
          display: flex;
          align-items: center;
          justify-content: space-around;

          h2{
            display: flex;
            align-items: center;
            font-size: 14px;
            font-weight: 400;
            color: #FAFAFA;
            text-align: center;

            span {
              font-size: 50px;
              color: #ffaf29;
              font-weight: 700;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
  .content {
    .projects{
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: -180px;
      z-index: 999;
      
      .item-marketing-digital {
        background-color: #ffaf29 !important;
      }
      .item {
        width: 280px;
        height: 280px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #424657;
        color: #FAFAFA;
        font-weight: 400;
        cursor: pointer;
        transition: .3s; 
          box-shadow: 5px 20px 30px 1px rgba(0,0,0,0.4);

        &:hover{
          margin-top: -8px;
        }

        .title {
          width: 35%;
          text-align: start;
          
          h2{
            letter-spacing: 2px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
`;

export const Portfolio = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  background-color: #333646;
  position: relative;

  .content {
    margin: 0 auto;
    width: 60%;
    padding: 250px 0px 40px 0px ;
    display: flex;
    justify-content: space-between;
    position: relative;

    .portfolio__desc {
      width: 40%;
      text-align: start;

      > h3 {
        font-size: 16px;
        color: #8c8d94;
        margin-bottom: 20px;
        letter-spacing: 3px;
        font-weight: 400;
      }
      h2 {
        width: 250px;
        font-size: 30px;
        color: #FAFAFA;
        margin-bottom: 30px;
        font-weight: 400;
      }
      h4 {
        width: 310px;
        font-size: 14px;
        color: #9d9ea4;
        margin-bottom: 50px;
      }
      a{
        font-size: 20px;
        text-decoration: none;
        color: #ffaf29;
        font-weight: bold;

        svg {
          margin-left: 30px;
        }
      }
      .portfolio-item {
        width: 400px;
        height: 550px;
        position: relative;
        background-color: #252734;
        margin-top: 80px;
        box-shadow: 5px 2px 15px 10px rgba(0,0,0,0.1);
        transition: .2s;
        cursor: pointer;

        &:hover{
          box-shadow: 0px 2px 10px 2px #333646;
        }

        .title {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 10px 0px;
          position: absolute;
          top: 0;
          text-align: center;
          
          h3{
            color: #ffaf29;
          }
        }
      }
    }
    .portfolio__projects {
      width: 40%;
      text-align: start;

      .portfolio-item {
        width: 400px;
        height: 550px;
        position: relative;
        background-color: #252734;
        margin-top: 80px;
        box-shadow: 5px 2px 15px 10px rgba(0,0,0,0.1);
        transition: .2s;
        cursor: pointer;

        &:hover{
          box-shadow: 0px 2px 10px 2px #333646;
        }

        .title {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 10px 0px;
          position: absolute;
          top: 0;
          text-align: center;

          h2 {
            width: 250px;
            font-size: 30px;
            color: #FAFAFA;
            margin-bottom: 30px;
            font-weight: 400;
          }
          h3{
            color: #ffaf29;
          }
        }
      }
    }
  }
`;

export const Recomendation = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252734;

  .content {
    margin: 0 auto;
    width: 60%;
    display: flex;
    justify-content: space-between;
    transition: 1s ease-in-out;

    .photo{
      width: 40%;

      img{
        width: 350px;
      }
    }
    .description {
      width: 55%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      
      svg {
        color: #424657;
        margin-bottom: 20px;
      }

      h2{
        font-size: 36px;
        color: #FAFAFA;
        margin-bottom: 40px;
        font-weight: 400;
        line-height: 40px;
        font-style: italic;
      }
      h3.name {
        font-size: 22px;
        font-weight: 400;
        color: #FAFAFA;
        margin-bottom: 10px;
      }
      h4.professeion {
        font-size: 16px;
        color: #FAFAFA;
        font-weight: 200;
        letter-spacing: 3px;
      }
      .dots {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 80px;
        position: absolute;
        bottom: 0;
        left: 0;

        #active {
          background-color: #ffc25c;
        }
        .dot{
          width: 80px;
          height: 12px;
          background-color: #424657;
          cursor: pointer;

          & + .dot {
            margin-left: 25px;
          }
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: auto;
  display: flex;
  background-color: #333646;
  position: relative;
  flex-direction: column;

  .content {
    margin: 0 auto;
    width: 60%;
    padding: 80px 0px 40px 0px ;
    display: flex;
    justify-content: space-between;
    position: relative;

    .get-project {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;

      h2{
        font-size: 26px;
        color: #FAFAFA;
        margin-bottom: 30px;
        font-weight: 400;
        line-height: 40px;
      }
      h4 {
        width: 260px;
        font-size: 14px;
        color: #9d9ea4;
        margin-bottom: 50px;
      }
      a{  
        font-size: 20px;
        text-decoration: none;
        color: #ffaf29;
        font-weight: bold;

        svg {
          margin-left: 30px;
        }
      }
    }
    .form {
      width: 40%;
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 26px;
        color: #FAFAFA;
        margin-bottom: 30px;
        font-weight: 600;
        line-height: 40px;
      }
      form {
        width: 100%;
        display: flex;
        flex-direction: column;

        input {
          & + input {
            border-top: 1px solid #252734; 
          }
          &::placeholder{
            color: #FAFAFA;
            font-weight: 400;
            font-size: 18px;
          }

          height: 60px;
          background: transparent;
          font-size: 16px;
          color: #ffaf29;
          margin: 10px 0px;
          border: 0;
          padding: 10px 0px;
        }

        button {
          margin: 0 auto;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffaf29;
          border: 0;
          font-size: 22px;
          cursor: pointer;

          svg {
            margin-left: 20px;
          }
        }
      }
    }
  }
`;

export const Rodape = styled.div`
  margin: 0 auto;
  width: 60%;
  min-height: 350px;
  padding: 80px 0px 20px 0px ;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  img{
    width: 100px;
  }
  h4 {
    font-size: 14px;
    color: #9d9ea4;
    margin-bottom: 50px;
    display: flex;
    align-items: center;

    svg{
      color: #ffc25c;
      margin-left: 10px;
    }
  }
  ul.rede-social {
    display: flex;
    list-style: none;

    li {
      & + li {
        margin-left: 30px;
      }
      a {
        color: #FAFAFA;
        text-decoration: none;

        svg {
          color: #ffc25c;
        }
      }
    }
  }
  .faixa {
    width: 99vw;
    height: 4px;
    background-color: #ffc25c;
    position: absolute;
    bottom: 0;
  }
`;