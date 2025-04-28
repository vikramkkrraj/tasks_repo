import React, { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRental, editRental } from "../redux/rentalSlice.js";
import { useNavigate, useParams } from "react-router-dom";

export const RentalForm = () => {
  const rentalId = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rental = useSelector((state) =>
    state.rentals.find((item) => item.id == rentalId)
  );

  const [customerName, setCustomerName] = useState(
    rental ? rental.customerName : ""
  );
  const [carType, setCarType] = useState(rental ? rental.carType : "suv");
  const [rentalDays, setRentalDays] = useState(rental ? rental.rentalDays : 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rental) {
      dispatch(
        editRental({ id: rental,  update : {customerName, carType, rentalDays} })
      );
    }else {
        dispatch(addRental({customerName, carType, rentalDays}))
    }
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="customer name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
         <select value={carType} onChange={(e) => setCarType(e.target.value)}>
        <option value="">All</option>
        <option value="suv">SUV</option>
        <option value="sedan">Sedan</option>
        <option value="hatchback">HatchBack</option>
      </select>
      <input
          type="number"
          placeholder="Rental days"
          value={rentalDays}
          onChange={(e) => setRentalDays(e.target.value)}
          required
        />
        <button type="submit" >{rental ? "Update Rental" : "Add Rental"}</button>
      </form>
    </div>
  );
};
