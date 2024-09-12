import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookService from "./BookService";
import Swal from "sweetalert2";
import { json } from "react-router-dom";

const BookServices = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = <span className="loading loading-spinner loading-lg"></span>
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    }
                  });
                  const remaining = bookings.filter(booking=> booking._id !== id);
                  setBookings(remaining);
            }
        }
            
    );
    }
  };

  const handleConfirm = id =>{
    fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({status : 'confirm'})
    })
    .then(res=> res.json())
    .then(data=> {
        console.log(data);
        if(data.modifiedCount > 0){
            const remaining = bookings.filter(booking => booking._id !== id);
            const updated = bookings.find(booking=> booking._id === id);
            updated.status = 'confirm'
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
        }
    })
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead className="border">
          <td>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Service</th>
              <th>Price</th>
              <th>Picked Date</th>
              <th>Status</th>
            </tr>
          </td>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <BookService key={booking._id} booking={booking} handleDelete={handleDelete} 
            handleConfirm={handleConfirm}
            ></BookService>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookServices;
