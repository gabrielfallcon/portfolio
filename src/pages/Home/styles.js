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

  ul.rede-social {
    display: flex;
    list-style: none;
    z-index: 888;

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
      width: 80%;
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