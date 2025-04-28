import React, { useState } from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'

export const RentalList = () => {
  const rentals = useSelector((state) => state.rentals);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredRentals = rentals.filter(
    (item) =>
      item.customerName.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? item.carType == filter : true)
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search customer"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="suv">SUV</option>
        <option value="sedan">Sedan</option>
        <option value="hatchback">HatchBack</option>
      </select>

      {filteredRentals.length == 0 ? (
        <p>No rentals found.</p>
      ) : (
        <ul>
          {filteredRentals.map((rental) => (
            <li id={rental.id}>
              {rental.customerName} - {rental.carType} - {rental.rentalDays}{" "}
              days
              <Link to={`/edit/${rental.id}`}>Edit</Link>
            </li>
          ))}
        </ul>
      )}
      <Link  to="/rent">Add Rental</Link> || <Link to={"/summary"} >Summary</Link>
    </div>
  );
};
