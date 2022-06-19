import React from "react";
import PythonPygame from "../assets/Portfolio/python-pygame.png";
import SpringBootProject from "../assets/Portfolio/springBootProject.png";
import SqlProjects from "../assets/Portfolio/SqlProjects.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: PythonPygame,
    },
    {
      id: 2,
      src: SpringBootProject,
    },
    {
      id: 3,
      src: SqlProjects,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black
  to-gray-800 w-full text-white md:h-screen"
    >
      <div
        className="max-w-screeen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Estos son Mis Proyectos</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
            px-12 sm:px-0"
        >
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover-scale-105">
                  Ir al Codigo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;