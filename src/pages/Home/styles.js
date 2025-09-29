import {styled} from 'styled-components'
import breakpoints from '../../styles/breakpoints'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0px 100px;
    height: 100vh;

        @media ${breakpoints.md} {
            flex-direction: column;
            padding: 0px 10px;

        }
    
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

        @media ${breakpoints.md} {
            margin: 10px;
            display: flex;
            align-items: center;
            justify-content: center;

            a{
                font-size: 18px;
            }

            img{
                display: none;
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

    @media ${breakpoints.md} {

        display: flex;
        align-items: center;
        flex-direction: column;
        
        p{
            display: none;
        }
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
    height: 500px;

    @media ${breakpoints.md} {
        width: 80vw;
        height: auto;
    }
`
export const Video = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;   
`

export const Source = styled.source`
   width: 100%;
   height: 100%;
   position: fixed;
   top: 0;
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
export const Form = styled.form`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    position: fixed;
    padding: 20px;
    border-radius: 5px;
    gap: 10px;
    top: 30%;
    left: ${(props) => (props.visivel ? "50%" : "-300px")};
    transform: ${(props) => (props.visivel ? "translateX(-50%)" : "none")};
    transition: left 1s ease-in-out;

    input{
        height: 40px;
        border-radius: 5px;
        border: 1px solid #8e8e93ff;
        padding-left: 5px;
        outline-color: #c51111;
    }

    textarea {
        min-height: 100px;
        min-width: 270px;
        border-radius: 5px;
        border: 1px solid #8e8e93ff;
        padding-left: 5px;
        outline-color: #c51111;
    }

    button{
        align-self: center;
    }
`

export const MascaraForm = styled.div`
    visibility: ${(props) => (props.visivel ? "visible" : "hidden")};
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(109deg, #0a0c10fc 15%, #0a0c10b3 50%, #0a0c10fc 85%);
    transition: visibility 1s ease-in-out;
`


/* 
Inicial: 
top: 30%;
left: -300px;

Final:
top: 30%;
left: 50%;
transform: translateX(-50%);
*/