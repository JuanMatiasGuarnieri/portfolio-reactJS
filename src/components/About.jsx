import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Sobre Mi</p>
        </div>
        <p className="text-xl mt-20">
          Me considero una persona racional,responsable, comprometida, con una gran capacidad y voluntad de aprendizaje. 
          Siempre dispuesto a ayudar y colaborar con distintas soluciones creativas. Tengo facilidad
          para las relaciones interpersonales y las actividades en grupo.
        </p>
        <br/>
          <p className="text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
            nisi deleniti dolor aperiam exercitationem sequi odio, maiores totam
            corporis soluta nulla blanditiis architecto harum perspiciatis
            fugiat voluptatibus molestiae itaque perferendis!
          </p>
      </div>
    </div>
  );
};

export default About;
