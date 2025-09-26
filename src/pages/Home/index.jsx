import Logo from "../../assets/logomario.png";
import Brothers from "../../assets/brothers.png";
import Background from "../../assets/video.mp4";
import Whatsapp from "../../assets/whatsapp.png";
import { Container, LogoCentral, ImgBrothers, Button,Source, Video, Mascara, WhatsappImg } from "./styles";

function Home() {
  return (

    <Container>

      <LogoCentral>
        <img src={Logo} alt="super-mario-logo" />
        <p>
          Encanadores Mario e Luigi - Resolvendo seus problemas Hidráulicos com
          Estilo
        </p>
        <p>
          Você já se encontrou em uma situação de emergência com encanamentos?
          Vazamentos inesperados, canos entupidos ou torneiras que não param de
          pinga? Não se preocupe, porque estamos aqui para salvar seu dia!
          Apresentamos a vocês os encanadores mais famosos do Reino dos
          Cogumelos - Mario e Luigi!
        </p>
        <Button type="button">Entre em contato</Button>

      </LogoCentral>

      <ImgBrothers src={Brothers} alt="super-mario-brothers" />

      <a href="https://wa.link/ge9hph" alt="Link para o WhatsApp" target="_blank" rel="noreferrer">
        <WhatsappImg src={Whatsapp} alt="WhatsApp" />
      </a>

      <Video autoPlay loop muted >
        <Source src={Background} type="video/mp4" />
      </Video>
      <Mascara />
    </Container>
  );
}

export default Home;
