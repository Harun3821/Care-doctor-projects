import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authproviders/AuthProvider";
import Bookingsrow from "./Bookingsrow";

const Bookiengs = () => {
    
    const {user} = useContext(AuthContext);
    const [bookings, setbookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(()=>{
         fetch(url)
         .then(res => res.json())
         .then(data =>setbookings(data))
    },[])

    const handelDelete = id =>{
      const proceed = confirm('Are you sure you want to delete')
      if(proceed){
          fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'DELETE',
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
              alert('delete successful');
              const remaining = bookings.filter(booking => booking._id !== id);
              setbookings(remaining);
            }
          })
          .catch(error => {
             console.log(error.message);
          });
      }
    }


    return (
        <div>
            <h2 className="text-5xl">Bookinges: {bookings.length}</h2>

    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-slate-300">
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
    
    {
        bookings.map(booking=> <Bookingsrow key={booking._id}
        booking={booking} 
        handelDelete={handelDelete}
        ></Bookingsrow>)
    }
     
     
     
    </tbody>
   
  
    
  </table>
</div>
        </div>
    );
};

export default Bookiengs;