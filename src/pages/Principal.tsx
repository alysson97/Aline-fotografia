import Header from "@/components/Header";


function Principal(){
    return(
        <div className="container imgFundo text-white m-0 p-0">
            <header className="">
                <Header url="/img/menu-branco.png"/>
            </header>
            
            <main className="grid place-items-center mainClass">
                {/* <h1 className="text-center text-white relative">ALINE LIMA</h1> */}
                <img src="/img/LOGO.png" alt="" className="logo" />
            </main>
            <footer>
                <i></i>
                <i></i>
                <i></i>
            </footer>
        </div>
    );
}

export default Principal;