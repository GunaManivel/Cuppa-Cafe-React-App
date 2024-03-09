import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ setId }) => {
  const [productsData, setProductsData] = useState([]);
  const navigate = useNavigate();
  const [deleteData, setDeleteData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [deleteData]);

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

  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`https://65eae9f543ce16418932cead.mockapi.io/Products/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h2>Products</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">S/No</th>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.id}</td>
              <td>{item.Product_name}</td>
              <td>${item.Product_price}</td>
              <td>{item.Product_description}</td>
              <td>
                <button
                  className="btn btn-outline-success"
                  style={{
                    background:
                      "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
                    color: "#fff",
                  }}
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>{" "}
                <button
                  className="btn btn-outline-danger"
                  style={{
                    backgroundColor: "#E0115F",
                    color: "#fff",
                  }}
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div className="text-center">
        <button
          className="btn btn-success"
          onClick={() => {
            navigate("/create");
          }}
        >
          Create a Product
        </button>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Products;
