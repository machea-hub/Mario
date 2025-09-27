import {styled} from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0px 100px;
    height: 100vh;
    
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 30px;
    


    a {
        color: #fff;
        font-size: 24px;
        cursor: pointer;
        text-decoration: none;
        transition: 0.5s ease-in-out;

        &:hover {
            color: #C51111;
            transform: scale(1.1);
        }

        &:active {
            opacity: 0.6;
        }
    }
`

export const LogoHeader = styled.img`
    height: 60px;
`

export const LogoCentral = styled.div`
    width: 50%;

    .title{
        font-weight: bold;
        font-size: 20px;
    }

    p{
        color: #fff
    }

    img{
        height: 200px;
        width: 355px;
    }

`
export const Button = styled.button`
    background-color: #C51111;
    color: #fff;
    width: 200px;
    height: 50px;
    margin-top: 20px;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    text-transform: uppercase;

    &:hover {
        opacity: 0.8;
        box-shadow: 0 0 15px #c51111;
    }

    &:active {
        opacity: 0.6;
    }

`

export const ImgBrothers = styled.img`
    height: 500px
`

export const Source = styled.source`
   width: 100vw;
`
export const Video = styled.video`
    position: fixed;
    top: 0;
    z-index: -1;    
`

export const Mascara = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(109deg, rgba(10, 12, 16, 0.99) 15%, rgba(10, 12, 16, 0.7) 50%, rgba(10, 12, 16, 0.99) 85%);
  z-index: -1;
`;

export const WhatsappImg = styled.img`
    height: 60px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
`
