import React from "react";
import Image from "next/image";
import "@/app/globals.scss";
import './index.scss';

const App = ()=>{
  return (

    <div className="flex justify-between space x-4 my-12 px-8 fontPoppins " style={{width: "100%"}}>
      <div className="item">
        <img src="/img/Footer/Union.png" alt="" className="mt-16" />
      </div>
      <div className="item">
        <img src="/img/Footer/CICLE.png" alt="" className="mx-auto md:mb-12" />
        <p className="text whitespace-nowrap">Aline Lima | Fotógrafa em São Paulo - Brasil </p>
        <div className="botao">
          <a href="#header">
            <img src="/img/Footer/botao-sobe.png" alt="" className="mx-auto md:mb-12 mt-12 botao-sobe" />
          </a>
        </div>
      </div>
      <div className="item">
        <img src="/img/Footer/REDES.png" alt="" className="mt-12" />
      </div> 
    </div>

  )
}

export default App;