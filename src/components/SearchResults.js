import React from "react";
import moment from "moment/moment";
const SearchResults = prop => {
  const fakeBookings = prop.FakeBookings;
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title </th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">room id</th>
            <th scope="col">email</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
          </tr>
        </thead>
        {fakeBookings.map(e => {
          let myDate = moment(e.checkOutDate).diff(e.checkInDate, "days");
          return (
            <tr>
              <th scope="row">{e.id}</th>
              <td>{e.title} </td>
              <td>{e.firstName}</td>
              <td>{e.surname}</td>
              <td>{e.email}</td>
              <td>{e.roomId}</td>
              <td>{e.checkInDate}</td>
              <td>{e.checkOutDate}</td>
              <td>{myDate}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default SearchResults;
