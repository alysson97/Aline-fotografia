"use client";
import Link from "next/link";
import React, {useState} from "react";
import "@/app/globals.scss";
import "./index.scss";

interface color{
  color: object;
}
interface url{
  url: string;
}


const App = (Props:url)=> {

  const [active, isActive] = useState(false);
  const Clicked = ()=> isActive(!active);

  //console.log(active);
  return (
    <div className="" id="header">
      <nav className="flex justify-center space x-4 fontZen mx-auto large-screen">
        <Link href={"/"} className="px-4 py-3 linkColor">
          Home
        </Link>
        <Link href={"../Sobre"} className="px-4 py-3 linkColor">
        Sobre
        </Link> 
        <Link href={"../Fotos"} className="px-4 py-3 linkColor">
          Fotos
        </Link>
        <Link href={"../Experiencias"} className="px-4 py-3 linkColor">
          Experiências
        </Link>
        <Link href={"../Contato"} className="px-4 py-3 linkColor">
          Contato
        </Link>
      </nav>
      <div className={active ? "mobile-menu" : "mobile-menu hide"}>
        <button onClick={Clicked} className={active ? "hidden" : "open"}>
          <img src={Props.url} className="p-6" alt="" />
        </button>
        <button onClick={Clicked} className={active ? "close" : "hidden"}>
          <span>X</span>
        </button>
        <nav className={active ? "flex flex-col justify-end" : "hidden"}>
          <Link href={"/"} className="px-4 py-3  nav-item">
            Home
          </Link>
          <Link href={"../Sobre"} className="px-4 py-3  nav-item">
          Sobre
          </Link> 
          <Link href={"../Fotos"} className="px-4 py-3  nav-item">
            Fotos
          </Link>
          <Link href={"../Experiencias"} className="px-4 py-3  nav-item">
            Experiências
          </Link>
          <Link href={"../Contato"} className="px-4 py-3 linkColor nav-item">
            Contato
          </Link>
      </nav>
      </div>
    </div>
   
  );
}

export default App;