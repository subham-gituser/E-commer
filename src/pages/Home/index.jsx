import React, { useEffect, Fragment } from "react";
import { ReactTitle } from "react-meta-tags";
import { connect } from "react-redux";
import { Loader } from "../../components";
import ProductCard from "./components/productCard";
import actions from "../../redux/action";
import "../../assets/style/containers/home.scss";

const Home = (props) => {
  console.log(props,'props')
  const {
    getProduct,
    product: { loading, products },
  } = props;
  // const { loading, products } = product;
  function getProducts() {
    return getProduct();
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <ReactTitle title="home page" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href="#container">
              <button>Scroll</button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {Array.isArray(products) &&
              products.length &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

export default connect(mapStateToProps, actions)(Home);
