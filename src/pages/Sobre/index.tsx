import Link from "next/link";
import React from "react";
import Header from "@/components/Header";
import '@/app/globals.scss';
import './index.scss';
import Footer from '@/components/Footer';
function Sobre(){
  return(
    <div className="">
      <header className="pb-4">
          <Header url="/img/menu.png" />
        </header>
        <main className="">
                <div className="grid md:grid-cols-2 place-items-center mt-16">
                  <img src="/img/Sobre/Sobre-crop.jpeg" alt="" className="p-6"  />
                  <h1 className="fontPoppins md:text-2xl md:tracking-widest break-words md:mt-32">ESTILO DE VIDA. CASAMENTO. FAMÍLIA. HISTÓRIAS</h1>
                </div>
                <div className="texto flex flex-col fontPoppins md:leading-6 md:mx-20 m-6 md:mt-16">
                  <p className="texto-sobre">
                    Sou Arquiteta e Fotógrafa.<br/>
                    Na minha trajetória como Arquiteta sempre tive um olhar detalhista e sensível para o mundo.<br/>
                    E a Fotografia me ensinou a olhar as pessoas com a mesma sensibilidade. Mostrando emoções, sentimentos e registrando momentos únicos.
                  </p>
                  <p className="mt-3 texto-sobre">
                    A minha fotografia vai muito além do que guardar algumas recordações. Eu transmito a sua história, sua identidade, sua evolução e suas grandes conquistas.
                  </p>

                </div>
                
            </main>
            <footer>
                <Footer/>
            </footer>
    </div>
  )
}

export default Sobre;