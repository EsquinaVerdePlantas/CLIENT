import React from "react";
import PlantsCard from "../../components/PlantsCard/PlantsCard";
import { BsArrow90DegLeft, BsChat } from "react-icons/bs";
import { Link } from "react-router-dom";

const OutdoorPlants = () => {
  const plantsData = [
    {
      id: 1,
      name: "Palmera Hawaiana",
      image:
        "https://ecopal.com.pe/wp-content/uploads/2021/01/palmera-hawaiana-1.webp",
      price: "$265",
    },
    {
      id: 2,
      name: "Dracaena",
      image:
        "https://ecopal.com.pe/wp-content/uploads/2021/01/dracaena-export2-2-3.png",
      price: "$180",
    },
    {
      id: 3,
      name: "Anturio Rosado",
      image:
        "https://ecopal.com.pe/wp-content/uploads/2021/01/dracaena-export2-2-3.png",
      price: "$180",
    },
    {
      id: 4,
      name: "Anturio Amarillo",
      image:
        "https://ecopal.com.pe/wp-content/uploads/2021/01/dracaena-export2-2-3.png",
      price: "$180",
    },
    {
      id: 5,
      name: "Palmera Bambu",
      image:
        "https://ecopal.com.pe/wp-content/uploads/2021/01/dracaena-export2-2-3.png",
      price: "$180",
    },
    {
      id: 6,
      name: "Palmera Bambu",
      image:
        "https://ecopal.com.pe/wp-content/uploads/2021/01/dracaena-export2-2-3.png",
      price: "$180",
    },
    {
      id: 7,
      name: "Palmera Bambu",
      image:
        "https://ecopal.com.pe/wp-content/uploads/2021/01/dracaena-export2-2-3.png",
      price: "$180",
    },
    {
      id: 8,
      name: "Palmera Bambu",
      image:
        "https://ecopal.com.pe/wp-content/uploads/2021/01/dracaena-export2-2-3.png",
      price: "$180",
    },
  ];

  return (
    <div className="max-w-full ">
      <div className="flex flex-col justify-center items-center bg-white max-w-full max-h-auto pt-10 pb-10">
        <h1 className="text-center font-sans font-semibold text-2xl md:text-4xl p-4">
          Bienvenidos a la sección – Plantas de exterior.
        </h1>
        <h2 className="text-center font-sans text-sm md:text-2xl p-4 md:pl-16 md:pr-16 ">
          Especial para hogar o negocios en espacios cerrados, brindamos
          asesoramiento y garantía de 1 año. Usamos sustratos especiales para
          plantas en macetas.
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-8 mt-8">
          <button className="bg-green-600 hover:bg-green-800 p-4 w-full text-sm md:w-72 h-12 rounded-full font-sans md:text-lg text-white flex items-center justify-center space-x-2">
            <BsArrow90DegLeft className="text-md md:text-xl" />
            <Link to={"/"}>
              <span> OTRAS CATEGORIAS </span>
            </Link>
          </button>

          <button className="bg-green-600 hover:bg-green-800 p-4 w-full text-sm md:w-72 h-12 rounded-full font-sans md:text-lg text-white flex items-center justify-center space-x-2">
            <Link to={"/"}>
              <span> COMUNICARME </span>
            </Link>
            <BsChat className=" text-md md:text-xl" />
          </button>
        </div>

        <span className="mt-14 w md:w-80 h-1 bg-green-800"></span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center mx-auto bg-green-100">
        {plantsData.map((plant) => (
          <PlantsCard
            key={plant.id}
            id={plant.id}
            name={plant.name}
            image={plant.image}
            price={plant.price}
          />
        ))}
      </div>
    </div>
  );
};

export default OutdoorPlants;
