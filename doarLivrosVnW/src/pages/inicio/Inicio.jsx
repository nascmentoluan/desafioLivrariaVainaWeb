import s from "../inicio/incio.module.scss"
import icongrupo from '../../assets/icongrupo.png'
import iconlendo from '../../assets/iconlendo.png'
import iconmao from '../../assets/iconmao.png'
import iconbalança from '../../assets/iconbalança.png'

export default function Inicio() {
    return (
        <main>
            <section className={s.primeiraSection}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={s.segundaSection}>
                <h2>Por que devo doar?</h2>
                <div className={s.divMotivos}>
                    <section>
                        <img src={icongrupo} alt="Imagem de 4 ícones de pessoas" />
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
                    <section>
                        <img src={iconlendo} alt="Imagem de ícone de  pessoa lendo" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section>
                        <img src={iconmao} alt="Imagem ilustrando 6 pessoas transformando vidas" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section>
                        <img src={iconbalança} alt="Imagem ícone de balança " />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </div>
            </section>
        </main>
    );
}

  