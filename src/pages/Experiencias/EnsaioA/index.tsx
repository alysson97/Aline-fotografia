import "./../index.scss";
import "@/app/globals.scss";
import "./index.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import img1 from "../../../../public/img/Fotos/alianca.jpg"
import img2 from "../../../../public/img/Experiencia/1.jpg"
import img3 from "../../../../public/img/Experiencia/2.jpg"
import img4 from "../../../../public/img/Experiencia/3.jpg"
import img5 from "../../../../public/img/Experiencia/4.jpg"
import img6 from "../../../../public/img/Experiencia/5.jpg"
import img7 from "../../../../public/img/Experiencia/6.jpg"
import img8 from "../../../../public/img/Experiencia/7.jpg"
import img9 from "../../../../public/img/Experiencia/8.jpg"
import Image from "next/image";

const images = [
  {id: '1', img: img1},
  {id: '2', img: img2},
  {id: '3', img: img3},
  {id: '4', img: img4},
  {id: '5', img: img5},
  {id: '6', img: img6},
  {id: '7', img: img7},
  {id: '8', img: img8},
  {id: '9', img: img9},
]



const App = () => {

  return(
  <div>
    <header>
      <Header url="/img/menu.png" />
    </header>
    <main className="grid w-full">
      <section className="menu">
        <h4><span className="text-sky-400/25 tracking-wider" style={{color: "#414141"}}>Experiências &gt; Histórias reais</span> &gt; Juliana e Jason | Renovação de votos</h4>
      </section>
      <section className="ensaios">
        <p>I truly believe we cross pass with people for a reason. We met Gabri and Carla last year in Tulum and through them, everything changed. They showed us grace, love and compassion from the first moment. We were welcomed into their culture, they helped us with our troubles of being Americans in a different country, the language barrier, and cultural norms we were having a hard time adjusting to. They taught us many life lessons just by being themselves, and we were at numerous times brought to tears when they were here to photograph our wedding. — This day wouldn&apos;t have been the same without you two and I can&apos;t even describe what these photos mean to us. We are truly speechless. Absolutely adore you both & can&apos;t wait until our paths cross again&quot;</p>
      </section>
      <section>
        <div className="imgContainer">
          {
            images.map((item)=>{

              const classChange = ()=>{
                switch(item.id){
                  case '1' || '5':
                    return "photo center";
                  case '2':
                    return "photo start";
                  case '3':
                    return "photo end";
                  case '4':
                    return "photo start";
                  
                  case '6':
                    return "photo start";
                  case '7':
                    return "photo end";
                  case '8' || '9':
                    return "photo center";
                }
              }

              
              return(
              <picture key={item.id}
                className={classChange()}              
               >
                <Image
                  height={1343}
                  width={838}
                  src={item.img}
                  alt="imagem"
                  quality={100}
                  loading="lazy"
                  className="nextIMG"
                />
              </picture>
              )
            })
          }
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