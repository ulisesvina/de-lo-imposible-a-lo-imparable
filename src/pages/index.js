import { useEffect, useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import Image from "next/image";

import man from "@/../public/man.svg";
import woman from "@/../public/woman.svg";

const Home = () => {
  const datos = [
    {
      tipo: 1,
      dato: "19,7% del Congreso colombiano está conformado por mujeres.",
      hombres: 80.3,
      mujeres: 19.7,
    },
    {
      tipo: 1,
      dato: "El desempleo, entre mujeres jóvenes, triplica al de los hombres. 23% vs 7.6%.",
      hombres: 7.6,
      mujeres: 23,
    },
    {
      tipo: 1,
      dato: "El 70% de las mujeres en Colombia han sido víctimas de violencia.",
      hombres: 30,
      mujeres: 70,
    },
    {
      tipo: 2,
      dato: "73.2% de los exámenes médico-legales por presunto delito sexual a mujeres son a niñas menores de 15 años.",
      etiqueta1: "Niñas menores de 15 años",
      etiqueta2: "Mujeres mayores de 15 años",
      progreso1: 73.2,
      progreso2: 26.8,
    },
    {
      tipo: 2,
      dato: "4 de cada 10 En Colombia, asesinatos de mujeres (39.2%) fueron cometidos en la vivienda y 3 de cada 10 (31.4%) en la vía pública.",
      etiqueta1: "En la vivienda",
      etiqueta2: "En la vía pública",
      progreso1: 39.2,
      progreso2: 31.4,
    },
  ];

  const [indiceDatoActual, establecerIndiceDatoActual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      establecerIndiceDatoActual(
        (indicePrevio) => (indicePrevio + 1) % datos.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const datoActual = datos[indiceDatoActual];

  return (
    <>
      <div className="flex items-center justify-center bg-[url('/bg.jpeg')] h-screen w-screen bg-center bg-no-repeat bg-cover text-black">
        <section className="pt-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mt-5">
              {datoActual.dato}
            </h2>
            <div className="flex justify-center flex-col mt-6 w-[80%] mx-auto">
              {datoActual.tipo === 1 ? (
                <>
                  <div>
                    <Image
                      src={man}
                      alt="hombre"
                      width={50}
                      height={50}
                      className="inline"
                    />
                    <ProgressBar
                      className="inline"
                      progress={datoActual.hombres}
                    />
                  </div>
                  <div className="mt-5">
                    <Image
                      src={woman}
                      alt="mujer"
                      width={50}
                      height={50}
                      className="inline"
                    />
                    <ProgressBar
                      progress={datoActual.mujeres}
                      className="inline"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="font-bold">{datoActual.etiqueta1}</p>
                    <ProgressBar
                      progress={datoActual.progreso1}
                      className="inline"
                    />
                  </div>
                  <div className="mt-5">
                    <p className="font-bold">{datoActual.etiqueta2}</p>
                    <ProgressBar
                      progress={datoActual.progreso2}
                      className="inline"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
      <div className="mt-10 w-[80%] m-auto">
        <div className="flex flex-wrap justify-center">
          <a className="w-1/3" href="https://colombia.unwomen.org/es/biblioteca/publicaciones/2020/11/mujeres-y-hombres-brechas-de-genero-en-colombia" target="_blank" rel="noreferrer">
            <div>
              <Image src="/1.png" alt="Image 1" width={300} height={200} />
              <p className="font-bold text-xl">¿Cómo estamos en Colombia?</p>
            </div>
          </a>
          <a
            href="https://www.who.int/es/news-room/fact-sheets/detail/gender
          "
            target="_blank"
            rel="noreferrer"
            className="w-1/3"
          >
            <div>
              <Image src="/2.jpg" alt="Image 2" width={300} height={200} />
              <p className="font-bold text-xl">¿Qué es el Género?</p>
            </div>
          </a>
          <a
            href="https://www.youtube.com/watch?v=y702erQzVnM"
            target="_blank"
            rel="noreferrer"
            className="w-1/3"
          >
            <div>
              <Image src="/3.jpg" alt="Image 3" width={300} height={200} />
              <p className="font-bold text-xl">¿Qué puedo hacer yo?</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
