const Descarga = () => {
  return (
    <div className="flex text-2xl flex-col items-center justify-center h-screen w-screen">
      <p className="text-4xl font-bold text-center mt-5">Contacto</p>
      <div className="mt-10">
        <a
          href="https://publuu.com/flip-book/169695/421071"
          target="_blank"
          rel="noreferrer"
          className="bg-pink-500 hover:bg-pink-700 p-6 text-white font-bold rounded"
        >
          Descarga aquí
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
