import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Product_id: "",
    Product_name: "",
    Product_price: "",
    Product_image: "",
    Product_description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    navigate("/products");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `https://65eae9f543ce16418932cead.mockapi.io/Products`,
        formData
      );
      alert("Data Created Successfully!!!");
      navigate("/products");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container" style={{ width: "50%" }}>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Id:</label>
          <input
            type="text"
            className="form-control"
            name="Product_id"
            value={formData.Product_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Product Name:</label>
          <input
            type="text"
            className="form-control"
            name="Product_name"
            value={formData.Product_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Product Price:</label>
          <input
            type="text"
            className="form-control"
            name="Product_price"
            value={formData.Product_price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Product Image:</label>
          <input
            type="text"
            className="form-control"
            name="Product_image"
            value={formData.Product_image}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Product Description:</label>
          <input
            type="text"
            className="form-control"
            name="Product_description"
            value={formData.Product_description}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="d-flex justify-content-start">
          <button type="submit" className="btn btn-primary py-2">
            Create
          </button>
          <div style={{ width: "10px" }}></div> {/* Gap */}
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
