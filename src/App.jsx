import s from './App.module.css'

const image1 = "/imagem1.png"
const image2 = "/imagem2.png"
const image3 = "/imagem3.png"

const icon_home = "/home.png"
const icon_bag = "/shopping-bag.png"
const icon_play = "/play.png"
const icon_chat = "/chat.png"
const icon_facebook = "/facebook.png"
const icon_instagram = "/instagram.png"
const icon_linkedin = "/linkedin.png"

function App() {

  return (
    <>
      <nav>

          <span className={s.navItems} onclick="navTo('s1')">
              <img src={icon_home} alt="empresa"/>
              <a href='#s1' className={s.navWords}>Sobre</a>
          </span>

          <span className={s.navItems} onclick="navTo('s2')">
              <img src={icon_bag} alt="produtos"/>
              <a href='#s2' className={s.navWords}>Produtos</a>
          </span>

          <span className={s.navItems} onclick="navTo('s3')">
              <img src={icon_play} alt="vídeo"/>
              <a href='#s3' className={s.navWords}>Vídeo</a>
          </span>

          <span className={s.navItems} onclick="navTo('s4')">
              <img src={icon_chat} alt="contato"/>
              <a href='#s4' className={s.navWords}>Contato</a>
          </span>

      </nav>


      <main/>


          <section id="s1" className={s.s1}>
                  <h1>RedBull</h1>
                  <h2>RedBull te dá Asas</h2>

          </section>



          <section id="s2" className={s.s2}>
              <div className={s.card}>
                  <img width="300px" height="auto" src={image1} alt="original"/>
                  <div>
                      <h4>RedBull Original</h4>
                      <p>Bebida energética conhecida pelo sabor marcante, levemente adocicado e com notas cítricas. Sua fórmula combina cafeína, taurina, vitaminas do complexo B e açúcar</p>
                  </div>
              </div>


              <div className={s.card}>
                  <img width="300px" height="auto" src={image2} alt="tropical"/>
                  <div>
                      <h4>RedBull Tropical</h4>
                      <p>Versão com sabor inspirado em frutas tropicais. Possui um perfil mais refrescante, doce e frutado. Oferecendo energia e disposição com um sabor mais leve e tropical.</p>
                  </div>
              </div>


              <div className={s.card}>
                  <img width="300px" height="auto" src={image3} alt="açai"/>
                  <div>
                      <h4>RedBull Açaí</h4>
                      <p>Seu sabor lembra frutas vermelhas com o toque característico do Açaí, trazendo uma mistura levemente doce, refrescante e marcante. Oferecendo energia e disposição com o gosto do Açaí. 
  </p>
                  </div>
              </div>

          </section>



          <section id="s3" className={s.s3}>
              <iframe className={s.vid} src="https://www.youtube.com/embed/h8hG4_B-ACY?si=xwPFRnnKR0AD2gWX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </section>



          <section id="s4" className={s.s4}>
              <h3>CONTATO</h3>
              <div className={s.formulario}>
                  <label for="nome">Nome:</label>
                  <input type="text" id="nome" placeholder="Digite o seu nome"/>


                  <label for="assunto">Mensagem:</label>
                  <textarea id="assunto" placeholder="Digite sua mensagem"></textarea>

                  <button onclick="enviar()">ENVIAR</button>

              </div>
          </section>


      <main/>

      <footer>
          <a href="https://www.facebook.com" target="_blank">
              <img width="40px" src={icon_facebook} alt="facebook"/>
          </a>
          <a href="https://www.instagram.com" target="_blank">
              <img width="40px" src={icon_instagram} alt="instagram"/>
          </a>
          <a href="https://www.linkedin.com" target="_blank">
              <img width="40px" src={icon_linkedin} alt="linkedin"/>
          </a>
      </footer>
    </>
  )
}

export default App
