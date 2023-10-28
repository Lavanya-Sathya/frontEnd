import Button from "react-bootstrap/Button";
import dataFootwear from "./data";

const Home = () => {
  return (
    <div>
      <div className="container" style={{ marginTop: "4rem" }}>
        <div className="row">
          {dataFootwear.map((data) => {
            const { id, name, desp, img } = data;
            return (
              <div className="col-md-4">
                <div key={id} className="card">
                  <img src={img} alt={id} style={{ height: "10rem" }} />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{desp}</p>
                    <Button>Add to cart</Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
