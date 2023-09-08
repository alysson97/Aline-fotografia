'use client'
import "./index.scss";
import "../../app/globals.scss";
import Image, { StaticImageData } from "next/image";
import React, {useState, useLayoutEffect, useEffect} from "react";
import  "./../../components/slideCarousel/slideCarousel";
//import GetWidth from "./../../components/getWidth/getWidth";
import { stringify } from "querystring";
import SimpleImageSlider from "react-simple-image-slider";
import img from "../../../public/img/Fotos/slide_fotos/8.jpg";
import otraImg from "../../../public/img/Fotos/slide_fotos/3.jpg";
import beatriz from "./depoimentos/beatriz.jpg";
import damares from "./depoimentos/Damares.jpg";
import Gabi from "./depoimentos/gabi.jpg";
import jaqueline from "./depoimentos/jaqueline.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface depoimentos {
  id: number;
  img: StaticImageData;
  nome: string;
  comment: string;

}

function Fotos() {

  const images = [
    { url: "img/Fotos/slide_fotos/seq/1.jpg" },
    { url: "img/Fotos/slide_fotos/seq/2.jpg" },
    { url: "img/Fotos/slide_fotos/seq/3.jpg" },
    { url: "img/Fotos/slide_fotos/seq/4.jpg" },
    { url: "img/Fotos/slide_fotos/seq/5.jpg" },
    { url: "img/Fotos/slide_fotos/seq/6.jpg" },
    { url: "img/Fotos/slide_fotos/seq/7.jpg" },
    { url: "img/Fotos/slide_fotos/seq/8.jpg" },
    { url: "img/Fotos/slide_fotos/seq/9.jpg" },
    { url: "img/Fotos/slide_fotos/seq/10.jpg" },
  ];


  const [depoimentos, setDepoimentos] = useState([
    {id: 1, img: img, nome: "BIANCA SANTOS", comment: "Aline garantiu que cumpríssemos o plano de sessão de fotos e obtivéssemos todas as imagens incríveis que planejamos!"},
    {id: 2, img: beatriz, nome: "Bia Okubo", comment: "Poderia fazer um textão sobre as inúmeras qualidades do seu trabalho, mas vou me ater em recomendar que vocês vejam as fotos no site dela. \"imagens valem mais que mil palavras!\" :)) "},
    {id: 3, img: damares, nome: "DAMARES", comment: "Obrigado pela competência, paciência e carinho comigo e com minha família. Abraço !!"},
    {id: 4, img: jaqueline, nome: "JAQUELINE", comment: "Seu trabalho é de encher os olhos. Possui uma sensibilidade extraordinária para captar os melhores momentos"},
    {id: 5, img: Gabi, nome: "GABRIELA EVANGELISTA", comment: "Estou obcecada e desmaiada com cada foto porque elas são boas demais!!!!! "},
    {id: 6, img: otraImg, nome: "COLIN BRIDGETOWN", comment: "Foi tudo maravilhoso e sentimos que fizemos uma amiga. Você é uma profissional excelênte"},
  ])

  const [depID, setDepID] = useState(1);

  const ChangeID = ()=>{
    
    useEffect(()=> {
      setTimeout(()=> {
        if(depID == 6){
          setDepID((id)=> id = 0);
        }
        setDepID((id) => id += 1);
        console.log(depID); 
      }, 5000)
    })
    
}
  ChangeID();

  const animaStyle = {
    
  }

  return (
    <div className="" >
      <header className="absolute z-10 w-full text-black">
        <Header url="/img/menu-branco.png" />
      </header>
      <main className="grid w-full">
        <section className="slider">
          <SimpleImageSlider
            width={'100%'}
            height={'100%'}
            images={images}
            showBullets={false}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={3.0}
            slideDuration={2.0}
          />
        </section>

        <section className="descricao mb-56">
          <hr className="mx-8 my-6 mt-16" />
          <div className="grid md:grid-cols-2 md:gap-2 mx-8">
            <div className="texto">
              <div className="texto-pequeno leading-6 mb-8">
                <p>&quot;<strong>Contando</strong> suas histórias através de <br/> imagens <strong>ATEMPORAIS</strong>&quot;</p>
              </div>
              <div className="texto-pequeno leading-18">
                <p className="font-normal fontPoppins mt-8"><em>Investir em mim com sua fotógrafa significa que você obtém...</em></p>
                <p className="mt-8">+um profissional experiente e calmo</p>
                <p className="mt-2">+um estilo único, artístico e atemporal</p>
                <p className="mt-2">+poses e direções claras e fáceis</p>
                <p className="mt-2">+uma nova amiga</p>

              </div>
            </div>

            <div className="texto-grande me-6">
              <h1>...é mais do que apenas</h1>
              <br/>
              <h1 className="mt-6 me-2"><strong>FOTOS BONITAS</strong></h1>
            </div>
          </div>
        </section>


        <section className="depoimentos">
          <div className="depElementos mx-8 grid place-items-center gap-y-4 relative">
            <h2 className="text-4xl tracking-widest mb-20 parent" style={{fontWeight: "600"}}>DEPOIMENTOS</h2>
            {depoimentos.map((item)=>{
            return(
            <div className="Comentarios-container parent mt-16
            "
             key={item.id}
             
             >
              <div className={item.id == depID? "Comentarios  ": "Comentarios Anima"}>
                <picture className="imgDep flex justify-center">
                  <Image
                    src={item.img}
                    alt="ola"
                    style={
                      {
                        zIndex: "10",
                        borderRadius: "50%",
                        maxWidth: "160px",
                        height: "150px"
                      }
                    }
                  />
                </picture>
                <div className="comentario text-center my-8">
                  <h1 className="depName text-3xl tracking-wider">{item.nome}</h1>
                  <p className="commentTexto my-4"><em>&quot;{item.comment}&quot;</em></p>
                </div>
              </div>
              
              
            </div>
            )})}
          </div>
        </section>
      </main>
      <footer className="">
        <Footer/>
      </footer>
    </div>
  );
}


export default Fotos;
