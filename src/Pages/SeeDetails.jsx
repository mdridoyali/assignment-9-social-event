import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
const SeeDetails = () => {
    const [card, setCard] = useState([])
  const {id} = useParams();
  const detailCard = useLoaderData();
  console.log(detailCard)

  const handleClick = ()=>{
    return  Swal.fire({
        icon: 'success',
        title: 'Order Conformed',
        text: 'Thank you!',
      })
  }


  useEffect( () => {
    const findCard = detailCard.find(cards => cards.id === id);
    setCard(findCard)
  } , [id, detailCard])

    return (
        <div>
            <div className="card  w-1/2 my-10 text-slate-300 bg-slate-600 shadow-xl mx-auto ">
            <figure>
              <img className="w-full h-96 border-b " src={card.image} alt="Shoes" />
            </figure>
            <div className="card-body space-y-2">
              <h2 className="card-title  text-2xl  ">{card.title}</h2>
              <p className=" font-semibold">{card.description}</p>
              <p className=" font-semibold">{card.details}</p>
              <div className="card-actions justify-end">
                <p className=" font-semibold">Price: {card.price}$</p>
                <button onClick={handleClick} className="btn hover:bg-slate-400 btn-sm ">Order Now</button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default SeeDetails;