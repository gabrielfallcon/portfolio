import styled from 'styled-components'


export const Container = styled.div`
  
`;

export const Header = styled.header`
  width: 100vw;
  height: 100vh;
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