import Header from './components/Header/Jsx/Header';
import Body from './components/Body/Jsx/Body'
import Image from './components/Image/Jsx/Image';
import styles from "./app.module.css";
import "./Styles/Colors.css";
import "./Styles/ValuesInitials.css";
import Area from './components/Area/Jsx/Area';
import Colors from './const/Colors';
function App() {
  return (
    <div className={styles.App}>
      <Header submenus={["HOME", "QUIENES SOMOS", "SERVICIOS", "TESTIMONIOS", "CONTÁCTANOS"]} ></Header>
      <section className={styles.FragmentScroll}>
        <Body preStyle={{ Color: Colors.SecondaryColor }}>
          <Area preStyle={{ Width: "50%" }}>
            <Area preStyle={{
              Width: "400px",
              Height: "400px"
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
            </Area>
          </Area>
          <Image preStyle={{ Width: "50%" }} classComponent={"ImageEndStart"} route="./Images/personas-negocio-trabajando-juntas.jpg"></Image>
        </Body>
        <Body>
        </Body>
        <Body></Body>
      </section>
    </div>
  );
}
export default App;
