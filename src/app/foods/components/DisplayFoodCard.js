import React from "react";
import { connect } from "react-redux";
import AddToCartButton from "./AddToCartButton";

const DisplayFoodCard = ({ food }) => {
  const { foodName, foodPic } = food;

  return (
    <div className="card">
      <div className="card-img-container">
        <img
          src={foodPic}
          className="card-img-top d-inline-block"
          alt={foodName}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{foodName}</h5>
        <div>
          <AddToCartButton food={food} />
        </div>
      </div>
    </div>
  );
};

DisplayFoodCard.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayFoodCard);
