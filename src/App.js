import Header from './components/Header/Jsx/Header';
import Body from './components/Body/Jsx/Body'
import Image from './components/Image/Jsx/Image';
import styles from "./app.module.css";
import "./Styles/Colors.css";
import "./Styles/ValuesInitials.css";
import Area from './components/Area/Jsx/Area';
import Colors from './const/Colors';
import Button from './components/Button/Jsx/Button';
import SocialBar from './components/SocialBar/Jsx/SocialBar';
function App() {
  return (
    <div className={styles.App}>
      <SocialBar preClass={"Normal"} preStyle={{
        Color: Colors.SecondaryColor,
        TextColor: Colors.BaseColor
      }}>
        <Image preStyle={{ Width: "30px", Height: "30px" }} preStyleImagen={{ Width: "auto", Height: "50%" }} route="./Icons/fb.png"></Image>
        <Image preStyle={{ Width: "30px", Height: "30px" }} preStyleImagen={{ Width: "auto", Height: "50%" }} route="./Icons/instagram.png"></Image>
        <Image preStyle={{ Width: "30px", Height: "30px" }} preStyleImagen={{ Width: "auto", Height: "65%" }} route="./Icons/youtube.png"></Image>
      </SocialBar>
      <Header submenus={["HOME", "QUIENES SOMOS", "SERVICIOS", "TESTIMONIOS", "CONTÁCTANOS"]} ></Header>
      <section className={styles.FragmentScroll}>
        <Body preStyle={{ Color: Colors.SecondaryColor }}>

          <Area preStyle={{ Width: "50%" }}>
            <Area preStyle={{
              Width: "400px",
              Height: "400px",
            }}>
              <hgroup>
                <h2 style={{
                  color: Colors.BaseColor
                }}>BIENVENIDO AL INICIO DE UNA
                  NUEVA FORMA DE VIVIR
                  TU TRABAJO</h2>
                <br></br>
                <h1 style={{
                  color: Colors.BaseColor
                }}>Nos enfocamos en conocer tu empresa, hacer un diagnostico y
                  después facilitarte la vida ofreciendote herramnietas para agilizar y
                  facilicar tu procesos.</h1>
              </hgroup>
              <Area preStyle={{ Width: "100%", Height: "100px", AlignItems: "flex-start" }} >
                <Button preStyle={{ Width: "40%", Height: "40%", TextColor: Colors.SecondaryColor }} text={"¡Quiero empezar!"}></Button>
              </Area>
            </Area>
          </Area>
          <Image preStyle={{ Width: "50%" }} classComponent={"ImageEndStart"} route="./Images/header-photo_1.jpg"></Image>
        </Body>
        <Body>
          <Area>parte1</Area>
          <Area>
            <Area>
              <article>
                <b>¿Quiénes somos?</b>
                <h3>EFICIENCIA, CALIDAD
                  Y ADAPTABILIDAD</h3>
                <br></br>
                <p>
                  Somos una consultoría de empresas enfocada en facilitar, eficientar y
                  agilizar procesos para que el trabajo se vuelva mucho más disfrutable.
                  Todos el equipo se encarga de conocer a fondo tu empresa para adaptar
                  herramientas que te ayuden a subir tus ingresos, motivar a tu gente,
                  tener mayor control, acceso fácil a información, tomar desiciónes.
                  Todo dependiendo de tus objetivos.<br></br>
                  Por otro lado, estamos convencidos de que el conocimiento debe ser
                  compartido por lo que formamos Worx Academy con la finalidad de que
                  aprendas un poco de lo que sabemos mediante tutoriales, worshops,
                  capacitaciones y más.
                </p>
              </article>
              <Area preStyle={{ Width: "30%", height: "30%" }}></Area>
            </Area>
          </Area>
        </Body>
        <Body></Body>
      </section>
    </div>
  );
}
export default App;
