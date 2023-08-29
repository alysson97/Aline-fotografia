import "./index.scss";
import "@/app/globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Fotos from "@/components/ExpFotos"





const App = () => {
  return(
  <div>
    <header>
      <Header url="/img/menu.png" />
    </header>
    <main className="grid w-full">
      <section className="menu">
      <h4><span className="text-sky-400/25 tracking-wider" style={{color: "#414141"}}>Experiências</span> &gt; Histórias reais</h4>
      </section>
      <section className="ensaios">
        <div className="centeredElement">
          <h1>HISTÓRIAS REAIS</h1>
        </div>
        <div className="ensaios z-20">
          <Fotos/>
        </div>
      </section>
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
  )
}

export default App;