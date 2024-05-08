import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../authproviders/AuthProvider";

const Checkout = () => {

    const service = useLoaderData();

    const {title, price, _id, img} = service;
    const {user} = useContext(AuthContext)
  
    const handelCheckout = event  =>{
     
        event.preventDefault()   
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id, 
            price: price,
        }

        console.log(booking)

        fetch('http://localhost:5000/bookings', {
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data=> {
          console.log(data);
          if(data.insertedId){
            alert('service Booking sucessfull')
          }
        })
    }


    return (
        <div>
        <h2 className="text-center text-3xl">Book services:{title}</h2>
     
      <form onSubmit={handelCheckout}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="form-control">
          <label className="label">
          <span className="label-text">Name</span>
          </label>
          <input type="text" name="name"  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
          <span className="label-text">Date</span>
          </label>
          <input type="date"  name="date" defaultValue={user?.displayName} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
          <span className="label-text">Email</span>
          </label>
          <input type="email"  name="email" defaultValue={user?.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
        <label className="label">
        <span className="label-text">Due amount</span>
          </label>
          <input type="text"  defaultValue={price}  className="input input-bordered" required />
        
        </div>
      
        </div>
        <div className="form-control mt-6 ">
       <input  className="btn btn-primary btn-block" type="submit" value="orader confirm" />
  
       
        </div>
      </form>
    </div>

    );
};

export default Checkout;