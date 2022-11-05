const RestaurantButton = prop => {
  return (
    <button className="btn btn-primary" onClick={prop.orderOne}>
      Add
    </button>
  );
};
export default RestaurantButton;
