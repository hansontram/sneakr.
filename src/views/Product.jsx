import { useState } from "react";

import "./Product.css";

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";

const Product = ({ data }) => {
  const [selectShoeSize, setSelectShoeSize] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  const { id } = useParams(); // Retrieve id params

  const shoe = data.find((item) => item.id === parseInt(id)); // find shoe with matching id
  // console.log("this is shoe", shoe);
  // console.log("param:", typeof id, "data", data);

  if (!shoe) {
    return <div>Shoe not found</div>;
  }

  const handleShoeSize = (e) => {
    setSelectShoeSize(e.target.value);

    console.log(selectShoeSize);
  };

  const submitForm = (e) => {
    e.preventDefault();
    // add to cart
    console.log("submit form works, size:", selectShoeSize);
    setSubmitStatus("Item is added to your cart");
  };

  //TODO: Get radio buttons figured out
  //TODO: Route is not fully working
  return (
    <div>
      <Navbar />
      <div className="product-page-container">
        <div className="product-container">
          <div className="img-container">
            <img className="productImg" src={shoe.image} alt="" />
          </div>
          <div className="right-container">
            <div>
              <p>Brand </p>
              <h3>{shoe.name}</h3>
            </div>
            <div>
              <form onSubmit={(e) => submitForm(e)}>
                <fieldset className="shoe-size-container">
                  <legend htmlFor="shoeSize">Select Size:</legend>
                  <div className="sizeInputs">
                    <input
                      type="radio"
                      id="size-7"
                      name="shoeSize"
                      value="7"
                      checked={selectShoeSize === "7"}
                      onChange={handleShoeSize}
                    />
                    <label htmlFor="size-7">7</label>
                    <input
                      type="radio"
                      id="size-7.5"
                      name="shoeSize"
                      value="7.5"
                      checked={selectShoeSize === "7.5"}
                      onChange={handleShoeSize}
                    />
                    <label htmlFor="size-7.5">7.5</label>
                    <input
                      type="radio"
                      id="size-8"
                      name="shoeSize"
                      value="8"
                      checked={selectShoeSize === "8"}
                      onChange={handleShoeSize}
                    />
                    <label htmlFor="size-8">8</label>
                    <input
                      type="radio"
                      id=""
                      name="shoeSize"
                      value="8.5"
                      checked={selectShoeSize === "8.5"}
                      onChange={handleShoeSize}
                    />
                    <label htmlFor="size-8.5">8.5</label>
                    <input
                      type="radio"
                      id="size-9"
                      name="shoeSize"
                      value="9"
                      checked={selectShoeSize === "9"}
                      onChange={handleShoeSize}
                    />
                    <label htmlFor="size-9">9</label>
                    <input
                      type="radio"
                      id="size-9.5"
                      name="shoeSize"
                      value="9.5"
                      checked={selectShoeSize === "9.5"}
                      onChange={handleShoeSize}
                    />
                    <label htmlFor="shoeSize">9.5</label>
                    <input
                      type="radio"
                      id="size-10"
                      name="shoeSize"
                      value="10"
                      checked={selectShoeSize === "10"}
                      onChange={handleShoeSize}
                    />
                    <label htmlFor="size-10">10</label>
                    <input
                      type="radio"
                      id="size-10.5"
                      name="shoeSize"
                      value="10.5"
                      checked={selectShoeSize === "10.5"}
                      onChange={handleShoeSize}
                    />
                    <label htmlFor="size-10.5">10.5</label>
                    <input
                      type="radio"
                      id="size-11"
                      name="shoeSize"
                      value="11"
                      checked={selectShoeSize === "11"}
                      onChange={handleShoeSize}
                    />
                    <label htmlFor="size-11">11</label>
                    <input
                      type="radio"
                      id="size-11.5"
                      name="shoeSize"
                      value="11.5"
                      checked={selectShoeSize === "11.5"}
                      onChange={handleShoeSize}
                    />
                    <label htmlFor="shoeSize">11.5</label>
                    <input
                      type="radio"
                      id="size-12"
                      name="shoeSize"
                      value="12"
                      checked={selectShoeSize === "12"}
                      onChange={handleShoeSize}
                    />
                    <label htmlFor="shoeSize">12</label>
                    <input
                      type="radio"
                      id="size-13"
                      name="shoeSize"
                      value="13"
                      checked={selectShoeSize === "13"}
                      onChange={handleShoeSize}
                    />
                    <label htmlFor="size-13">13</label>
                  </div>
                </fieldset>
                <button type="submit">Add To Cart</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
