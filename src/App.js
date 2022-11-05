import React from "react";
import Heading from "./components/Heading";
import InfoCard from "./components/TouristInfoCards";
import fakeBookings from "./data/fakeBookings.json";
import Bookings from "./components/Bookings";
import "./App.css";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import Restaurant from "./components/Restaurant";
const hotelInfo = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <InfoCard />

      <Restaurant />
      <Footer hotelInfo={hotelInfo} />
    </div>
  );
};

export default App;
