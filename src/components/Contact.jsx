import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800
    p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contacto
          </p>
          <p className="py-6">Completa el Formulario para Contactarme</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/587eed22-5186-46fa-b1a8-e643e4ba91a7"
            className="flex flex-col w-full md:w-1/2"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Introduce tu Nombre"
              className="p-2 bg-transparent border-2
                    rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Introduce tu Email"
              className="my-4 p-2 bg-transparent border-2
                    rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Introduce tu Mensaje"
              rows="10"
              className="p-2 bg-transparent border-2 text-white focus:outline-none></textarea"
            />
            <button
              className="text-white bg-gradient-to-b
            from-cyan-500 to to-blue-500 px-6 py-3 my-8 mx-auto
            flex items-center rounded-md hover:scale-110 duration-300"
            >
              Hablame POR FAVOR :D
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
