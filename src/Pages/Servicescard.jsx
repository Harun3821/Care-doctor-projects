import PropTypes from 'prop-types';
import { GoArrowRight } from "react-icons/go";


const Servicescard = ({services}) => {
     
    const  {img, title, price} = services;


    return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{title}</h2>
    <p className="text-[#FF1542] font-semibold">{price}</p>
    <div className="card-actions flex justify-end text-[#FF1540]">
     <GoArrowRight/>
    </div>
  </div>
</div>
    );
};

export default Servicescard;

Servicescard.propTypes={
  services:PropTypes.obj
}

