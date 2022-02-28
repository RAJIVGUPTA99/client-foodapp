import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFoods } from "../../foods/actions/foodActions";
import DisplayFoods from "../../foods/components/DisplayFoods";
import Landing from "../../core/components/layouts/Landing";

const Home = ({ auth: { user }, food: { foods }, getFoods }) => {
  useEffect(() => {
    getFoods();
  }, [getFoods]);
  return (
    <section className="container">
      {user !== null ? (
        <div className="text-center">
          <h1 className="large text-primary">Food Items</h1>
          <div className="container-fluid">
            <div className="row">
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col">
                <select className="form-select">
                  <option defaultValue></option>
                  <option>Indian</option>
                  <option>Chinese</option>
                  <option>Mexican</option>
                </select>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <DisplayFoods allFoods={foods} />
            </div>
          </div>
        </div>
      ) : (
        <Landing />
      )}
    </section>
  );
};

Home.propTypes = {
  auth: PropTypes.object.isRequired,
  food: PropTypes.object,
  getFoods: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  food: state.food,
});

export default connect(mapStateToProps, { getFoods })(Home);
