import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.scss";
import "./index.scss";
import axios from "axios";

const App = ()=>{
  const SendEmail = () =>{
    axios.post("./../api/sendEmail").then(() => console.log("Deu certo")).catch(()=> console.log("Deu errado"));
  };
  return(
    <div className="" style={{height: ""}}>
      <header className="header">
        <Header url="/img/menu.png"/>
      </header>
      <main className="grid lg:grid-cols-2 gap-x-2 font md:my-24 md:px-12 principal ">
      <section className="sc-one">
        <div className="sm:hidden my-8">
          <h1 className="Fale">FALE CONOSCO</h1>
          
        </div>
        <Image
        alt=""
        src={"/img/CONTATO/contato_foto.jpeg"}
        width={658}
        height={1122}
        className="h-auto w-auto"
        quality={100}
        />
      </section>

      <section className="form-section">
        <div className="">
          <h1 className="Fale fale-conosco-full">FALE CONOSCO</h1>
          <p className="text my-8 mt-2">Fico contente que tenha chegado até aqui! Vamos bater um papo, tomar um café e nos conhecer! Vou amar saber mais sobre você!</p>
        </div>

        
        <form action="" method="post">
        <label htmlFor="" className="form-label">
            <input
              type="text"
              name="nome"
              placeholder="Nome*"
              required
              id=""
              className="input"
            />
          </label>
          <label htmlFor="" className="form-label">
            <input
              type="tel"
              name="telefone"
              placeholder="Telefone*"
              required
              id=""
              className="input"
            />
          </label>
          <label htmlFor="" className="form-label">
            <input 
              type="email"
              name="E-mail"
              placeholder="E-mail"
              id=""
              className="input"
            />
          </label>
          <label htmlFor="" className="form-label">
            <input
              type="date"
              name="data"
              placeholder="Data*"
              required
              id=""
              className="input"
            />
          </label>
          <label htmlFor="" className="form-label">
            <input 
              type="text"
              name="local"
              placeholder="Local*"
              required
              id=""
              className="input"
            />
          </label>
          <label htmlFor="" className="form-label">
            <input 
              type="text"
              name="mensagem"
              placeholder="Mensagem*"
              required
              id=""
              className="input input-text"
            />
          </label>
          <label htmlFor="" className="form-label submit-container">
            <input 
              type="submit" 
              value="Enviar" 
              className="submit"  
              onClick={SendEmail}
            />
          </label>
        </form>
          

        <div className="text mt-12 ml-2">
          <p className="my-2">E-mail: contato@alinelima.com.br</p>
          <p className="my-2">Telefone: +55 (11) *1111-111</p>
          <p className="my-2">WhatsApp:</p>
          <p className="my-2"><ins>Enviar mensagem</ins></p>
        </div>
      </section>
      
      </main>
      <footer className="">
        <Footer/>
      </footer>
      
    </div>
  )
}

export default App;