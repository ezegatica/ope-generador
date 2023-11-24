import React from 'react';
import Image from 'next/image';
export default function Generator() {
  return (
    <div className="generator max-w-xl mx-auto">
      <div className="flex justify-center items-center pt-5 mb-8">
        <a href="https://github.com/ezegatica/ope-generador">
          <Image src="/bg.svg" width={125} height={125} alt="" />
        </a>
      </div>
      <p className="text-center uppercase font-semibold text-xl mb-10">
        Comunicado de Prensa
      </p>
      <div className="text-lg" contentEditable="true">
        <p>
          Ciudad de Buenos Aires, 23 de noviembre de 2023.- El Presidente
          Electo, Javier Milei, encabezó esta mañana una reunión con sus equipos
          técnicos. <br />
          Lo acompañaron Nicolás Posse, Diana Mondino, Guillermo Francos y
          Karina Milei. <br /> <br />
          CLICKEA PARA EDITAR
          <br /> <br />
          Por otro lado, el Presidente electo recibió anoche el llamado del ex
          Presidente de los Estados Unidos, Donald Trump, quien lo felicitó y
          señaló que el triunfo por amplia diferencia en la elección del domingo
          pasado tuvo gran impacto a nivel mundial. <br /> <br />
          Asimismo, el ex Presidente Trump anticipó que viajará a la Ciudad de
          Buenos Aires para reunirse con él.
        </p>
      </div>
    </div>
  );
}
