const Descarga = () => {
  return (
    <div className="flex text-2xl flex-col items-center justify-center h-screen w-screen">
      <p className="text-4xl font-bold text-center mt-5">¡NO ESTAS SOLX!</p>
      <div className="mt-10">
        <a
          href="https://sicecon.fiscalia.gov.co/denuncia/LlenarFormulario "
          target="_blank"
          rel="noreferrer"
          className="bg-pink-500 hover:bg-pink-700 p-6 text-white font-bold rounded"
        >
            Denuncia discriminación aquí
        </a>
        <a
          href="https://bogota.gov.co/mi-ciudad/salud/bogota-el-distrito-ofrece-ayuda-psicologica-gratis-cuales-son"
          target="_blank"
          rel="noreferrer"
          className="bg-pink-500 hover:bg-pink-700 p-6 text-white font-bold rounded ml-5"
        >
          Lineas de ayuda
        </a>
        <a
          href="mailto://contactoaloimparable@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="bg-pink-500 hover:bg-pink-700 p-6 text-white font-bold rounded ml-5"
        >
          Contacta con nosotros
        </a>
      </div>
    </div>
  );
};

export default Descarga;
