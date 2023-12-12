import { useState } from "react";

const data = 
    {
        _id: "656b9b1f921fb2f6bcda0ce2",
        name: "Peace Lily",
        image: ["https://ecopal.com.pe/wp-content/uploads/2021/01/palmera-hawaiana-1.webp","https://ecopal.com.pe/wp-content/uploads/2021/07/tronco-de-brazil-ecopal.png","https://ecopal.com.pe/wp-content/uploads/2021/08/Strelitzia-195-F-700x875.png","https://ecopal.com.pe/wp-content/uploads/2021/03/Buganvilla-220.png"],//Array con enlaces
        price: 16.5,
        plantCategory: "interior",
        description: "Florece en condiciones de poca luz.",
        sunlight: "sombra",
        __v: 0,
    }


const Detail = () => {

    const [mainImage, setMainImage] = useState(data.image[0])
    const [imgSelected, setImageSelected] = useState(0);
    const [valueInput, setValueInput] = useState(1);

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
                    <img id={data._id} className="w-full" src={mainImage} alt={data.name} />
                </div>
                <ul className="w-full flex gap-2 md:w-24 md:flex-col">
                   { data.image.map((img, index) => (
                        <li className="h-24 w-full md:h-20">
                            <img key={index}  id={index} src={img} className={`w-full h-full object-cover ${index === imgSelected ? "opacity-50" : ""}`} alt={data.name} onClick={() => showImage(index)}/>
                        </li>
                        )
                    )}
                </ul>
            </div>
            <div className="md:w-2/5">
                <h1 className="font-aBeeZee uppercase text-3xl md:text-4xl mb-8">Palmera Hawaiana</h1>
                <span className="font-sans text-2xl text-secondary block mb-8">S/ 265.00</span>
                <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eum obcaecati quasi a ipsam dignissimos deleniti, omnis labore dolorem? Quae perspiciatis iste vero possimus quisquam debitis corrupti facere ex quia!</p>
                <div className="flex gap-4">
                    <input className="border border-slate-300 p-4 w-20 rounded-md" type="number" onChange={handleInput} value={valueInput}/>
                    <button className="btnPrimary w-full">Agregar al Carrito</button>
                </div>
            </div>
        </section>
    )
}

export default Detail;