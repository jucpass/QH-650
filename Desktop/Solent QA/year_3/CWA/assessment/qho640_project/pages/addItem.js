// pages/products.js
import React from "react";
import AddItemPage from "../app/products/addItemForm";

const AddProducts = () => {
    return (
      <section className="section is-medium">
      <h1 className="title">Add new Products</h1>
    <p>Create product</p>
    <AddItemPage />
  </section>
    )
  };
  
  export default AddProducts;