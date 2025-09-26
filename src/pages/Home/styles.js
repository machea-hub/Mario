import {styled} from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 100px;
    height: 100vh;
    
`

export const LogoCentral = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;

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
    /* padding: 10px 20px; */
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
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    background: linear-gradient(109deg, rgba(10, 12, 16, 0.99) 15%, rgba(10, 12, 16, 0.7) 50%, rgba(10, 12, 16, 0.99) 85%);
`
