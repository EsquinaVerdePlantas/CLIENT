import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const URL_API = 'http://localhost:3001/plants';

const Detail = () => {
    const {id} = useParams();
    const [plant, setPlant] = useState({});
    const [mainImage, setMainImage] = useState("")
    const [imgSelected, setImageSelected] = useState(0);
    const [valueInput, setValueInput] = useState(1);
    
    useEffect(async () => {
        try {
            const {data} = await axios.get(`${URL_API}/${id}`);
            setPlant(data.plantById);
            setMainImage(data.plantById.images[0])
        } catch (error) {
            console.log("Error")
        }
    }, [])

    const showImage = (index) => {
        const imagen = document.getElementById(`${index}`);
        setMainImage(imagen.src);
        setImageSelected(index)
    }

    const handleInput = (event) => {
        setValueInput(event.target.value);
    }

    return (
        <section className="w-[90%] lg:w-container mx-auto py-8 flex flex-col gap-8 md:flex-row">
            <div className="flex flex-col gap-2 md:flex-row md:w-3/5">
                <div className="w-full md:order-2">
                    <img id={plant._id} className="w-full" src={mainImage} alt={plant.name} />
                </div>
                <ul className="w-full flex gap-2 md:w-24 md:flex-col">
                   { plant.images?.map((img, index) => (
                        <li className="h-24 w-full md:h-20">
                            <img key={index}  id={index} src={img} className={`w-full h-full object-cover ${index === imgSelected ? "opacity-50" : ""}`} alt={plant.name} onClick={() => showImage(index)}/>
                        </li>
                        )
                    )}
                </ul>
            </div>
            <div className="md:w-2/5">
                <h1 className="font-aBeeZee uppercase text-3xl md:text-4xl mb-8">{plant.name}</h1>
                <span className="font-sans text-2xl text-secondary block mb-8">${plant.price}</span>
                <ul className="mb-8 list-disc pl-4">
                    <li className="mb-2">{plant.description}</li>
                    <li className="mb-2">{plant.sunlight}</li> 
                    <li className="mb-2">{plant.WateringModel}</li>
                </ul>
                <div className="flex gap-4">
                    <input className="border border-slate-300 p-4 w-20 rounded-md" type="number" onChange={handleInput} value={valueInput}/>
                    <button className="btnPrimary w-full">Agregar al Carrito</button>
                </div>
            </div>
        </section>
    )
}

export default Detail;