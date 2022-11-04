import React from "react";
const InfoCard = () => {
  return (
    <div className="myContainer">
      <div className="card">
        <img
          src="https://media.istockphoto.com/photos/squinty-bridge-glasgow-picture-id469974825?k=20&m=469974825&s=612x612&w=0&h=SHYq92xjEKGDNZU1sVBnhQJKsTtujh7vv-psQ_zCNyw="
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://media.istockphoto.com/photos/view-of-a-footbridge-in-salford-quays-in-manchester-england-picture-id1061647528?k=20&m=1061647528&s=612x612&w=0&h=qhl2vXJ4vsCF10NHu8nRs6hU_LUUB3eYFynEgN8zfx8="
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.printawallpaper.com/wp-content/uploads/2020/06/london_eye_detail.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
export default InfoCard;
