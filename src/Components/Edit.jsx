import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editdata, setEditdata] = useState({
    Product_id: "",
    Product_name: "",
    Product_price: "",
    Product_image: "",
    Product_description: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://65eae9f543ce16418932cead.mockapi.io/Products/${id}`
      );
      setEditdata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target; //e.target.name={Product_id}  e.target.value={Product_id 1}
    setEditdata({ ...editdata, [name]: value });
  };
  const handleCancel = () => {
    navigate("/products");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://65eae9f543ce16418932cead.mockapi.io/Products/${id}`,
        editdata
      )
      .then((res) => alert("Data Updated Successfully!!!"))
      .catch((err) => console.log(err));
    navigate("/products");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card" style={{ width: "50%" }}>
        <div className="card-header">
          <h2>Edit Product</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Product Id:</label>
              <input
                type="text"
                className="form-control"
                name="Product_id"
                value={editdata.Product_id}
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
                value={editdata.Product_name}
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
                value={editdata.Product_price}
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
                value={editdata.Product_image}
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
                value={editdata.Product_description}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <div className="d-flex justify-content-start">
              <button type="submit" className="btn btn-primary py-2">
                Update
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
      </div>
    </div>
  );
};

export default Edit;
