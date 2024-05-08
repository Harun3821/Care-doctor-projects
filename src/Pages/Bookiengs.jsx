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
        bookings.map(booking=> <Bookingsrow key={booking._id} booking={booking} ></Bookingsrow>)
    }
     
     
     
    </tbody>
   
  
    
  </table>
</div>
        </div>
    );
};

export default Bookiengs;