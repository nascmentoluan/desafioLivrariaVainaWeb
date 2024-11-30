import s from "./footer.module.scss"
import facebooklogo from "../../assets/facebooklogo.png"
import twitterlogo from "../../assets/twitterlogo.png"
import youtubelogo from "../../assets/youtubelogo.png"
import linkedinlogo from "../../assets/linkedinlogo.png"
import instagramlogo from "../../assets/instagramlogo.png"

export default function footer() {
    return (
      <footer>
          <section className={s.primeiraSeção}>
            <p>4022-8922</p>
            <nav>
              <a href=""><img src={facebooklogo} alt="Logo da Rede Social Facebook" /></a>
              <a href=""><img src={twitterlogo} alt="Logo da Rede Social Twiiter" /></a>
              <a href=""><img src={youtubelogo} alt="Logo da Rede Social Youtube" /></a>
              <a href=""><img src={linkedinlogo} alt="Logo da Rede Social Linkedin" /></a>
              <a href=""><img src={instagramlogo} alt="Logo da Rede Social Instagram" /></a>
              </nav>         
          </section>
          <section className={s.segundaSeção}>
            <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
          </section>
      </footer>
    );
  }
  