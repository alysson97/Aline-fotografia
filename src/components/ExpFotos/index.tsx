import Header from "@/components/Header";
import Image, { StaticImageData } from "next/image";
import image1 from "../../../public/img/Fotos/alianca.jpg"
import image2 from "../../../public/img/Fotos/lavinha.jpg"
import image3 from "../../../public/img/Fotos/gravidos.jpg"
import image4 from "../../../public/img/Fotos/noivos.jpg"
import image5 from "../../../public/img/Fotos/garota.jpg"
import image6 from "../../../public/img/Fotos/familia_3.jpg"
import Link from "next/link";
import "./index.scss";

interface Images{
  id: string;
  img: StaticImageData;
  link: string;
  desc: string;
}


const App = ()=> {

  let images: Images[] = [
    {id:'1', img: image1, link: "Experiencias/EnsaioA", desc: "Juliana e Jason - Renovação de votos"},
    {id:'2', img: image2, link: '#', desc: "Lavínia Tatar"},
    {id:'3', img: image3, link: '#', desc: "Esposa de Olívia"},
    {id:'4', img: image4, link: '#', desc: "Nina e Felipe - Elopement"},
    {id:'5', img: image5, link: '#', desc: "Bruna Matos"},
    {id:'6', img: image6, link: '#', desc: "Lara, Rafa e Gael"},
  ]
  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-6 lg:place-items-center album
    ">
      {
        images.map((item)=>{
          return(
            <picture className="photoContainer" key={item.id}>
              <Link href={item.link}>
                <Image
                  className="z-10 photo h-auto w-auto"
                  width={463}
                  height={630}
                  alt="Foto"
                  src={item.img}
                  quality={100}
                  style={{paddingLeft: "2rem", paddingRight: "2rem"}}
                />
              </Link>
              <div className="photoComment flex justify-center">
                <figcaption className="mx-auto comment">{item.desc}</figcaption>
              </div>
              
            </picture>
          )
        })
      }
    </div>
    

  )
    
    
}

export default App;
