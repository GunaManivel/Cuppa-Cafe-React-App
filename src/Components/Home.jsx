import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Style.css/Home.css";

const Home = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://65eae9f543ce16418932cead.mockapi.io/Products"
      );
      setProductsData(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleBuyNow = (productId) => {
    // Add your custom functionality here
    alert(`Buy Now clicked for Product : ${productId}`);
  };

  return (
    <div className="container">
      <h2
        className="text-center mt-5 mb-4"
        style={{
          fontFamily: "Atomic Age",
        }}
      >
        Explore Our Products
      </h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productsData.map((item, index) => (
          <div key={index} className="col mb-4">
            <div className="card h-100">
              <img
                src={item.Product_image}
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.Product_name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Price: ${item.Product_price}
                </h6>
                <p className="card-text">{item.Product_description}</p>
                <button
                  className="btn btn-outline-warning mt-auto align-self-end"
                  onClick={() => handleBuyNow(item.Product_name)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
