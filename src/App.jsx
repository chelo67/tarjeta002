import Logo from "./assets/logo.png";

function App() {
  return (
    <>
      {/* CONTENEDOR */}
      <div className="sm:w-100 md:w-1/3 border border-black h-screen m-auto">
      
        {/* LOGO Y UBICACION */}
        <section className="h-24 flex">
          <div className="w-1/2 flex pl-2">
            <img src={Logo} alt="logo" className="pl-2 max-w-1/2" />
          </div>

          <div className="w-1/2 flex justify-center items-center gap-4">
            <div>
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4>Calle 222, Ciudad</h4>
              <h5 h5>Provincia, Pais</h5>
            </div>
          </div>
        </section>

        {/* IMAGEN CABECERA */}
        <section className="header"></section>





      </div> {/* /CONTENEDOR */}
    </>
  );
}

export default App;
