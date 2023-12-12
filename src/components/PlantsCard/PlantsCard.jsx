import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPatchPlusFill } from "react-icons/bs";

const PlantsCard = ({ id, name, image, price }) => {

    return (
        <div className="grid grid-cols-1 max-w-full max-h-full bg-white rounded-2xl m-5 pb-4 relative overflow-hidden">
        <Link to={`/detalle/${id}`}>
          <img className="w-full h-96 object-cover rounded-t-2xl transition duration-300 transform hover:scale-105" src={image} alt={name} />
          <div className="bg-white bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <Link to={`/detalle/${id}`}>
              <div className="text-gray-700 hover:text-gray-900">
                <BsFillPatchPlusFill className="text-green-800" size={40}/>
              </div>
            </Link>
          </div>
        </Link>
      
        <section className="p-4">
          <h3 className="pb-2 font-sans">{name}</h3>
          <h3 className="pb-2 font-sans text-gray-500">{price}</h3>
        </section>
      </div>
    )
}

export default PlantsCard;