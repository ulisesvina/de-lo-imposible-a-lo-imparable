import Image from "next/image";

const Sobre = () => {
  return (
    <div className="pt-20 bg-blue-700 w-screen h-screen flex flex-col items-center">
      <section className="text-2xl text-white font-bold w-[80%] m-auto">
        Nuestro propósito es sensibilizar a los estudiantes sobre las
        desigualdades de género en diferentes ámbitos de la vida, promover la
        igualdad de género y la equidad en los roles y oportunidades, desafiar
        los estereotipos de género y fomentar la empatía, el respeto y la
        solidaridad.
      </section>
      <section className="bg-white text-black h-full w-full mt-10 m-auto">
        <div className="m-auto w-[80%] mt-10 ">
          <div className="flex flex-col md:flex-row">
            <img src="/4.jpg" alt="4" className="w-full md:w-1/2" />
            <div className="flex flex-col justify-center items-center md:w-1/2">
              <h2 className="text-xl text-right">
                <p className="mt-2">
                  {" "}
                  Nuestros talleres proporcionan un ambiente seguro y de
                  respeto, para que los estudiantes se sientan cómodos de
                  participar activamente.
                </p>
                <p className="mt-2">
                  Se utilizan actividades lúdicas y participativas como juegos
                  de presentación, en los que los estudiantes socialicen y
                  reflexionen sobre el género.
                </p>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white text-black h-full w-full m-auto">
        <div className="m-auto w-[80%] mt-10 font-bold text-2xl">
          La educación sobre la igualdad de género se presenta como una
          herramienta esencial para crear una sociedad más justa e inclusiva.
          Buscamos educar y sensibilizar a los estudiantes sobre las
          desigualdades de género, fomentar la igualdad de género y desafiar los
          estereotipos de género
        </div>
      </section>
    </div>
  );
};

export default Sobre;
