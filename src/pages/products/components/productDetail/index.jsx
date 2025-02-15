import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useParams } from "react-router-dom";
import "./productDetail.scss";
import { connect } from "react-redux";
import actions from '../../../../redux/action'
import { ReactTitle } from "react-meta-tags";

import ReviewCard from "../reviewCard";
import { Loader } from "../../../../components";
import image from "../../../../assets/images/cover.jfif"
// import { addItemsToCart } from "../../actions/cartAction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
// import { NEW_REVIEW_RESET } from "../../constants/productConstants";

const ProductDetails = (props) => {
  const {productDetails:{loading,error,product},getProductDetail} =props
  const params = useParams();
  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  useEffect(()=>{
    getProductDetail(params.id)
  },[])

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  // const addToCartHandler = () => {
  //   dispatch(addItemsToCart(params.id, quantity));
  // };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", params.id);

    // dispatch(newReview(myForm));
    console.log(myForm)

    setOpen(false);
  };

  // useEffect(() => {
  //   if (error) {
  //     dispatch(clearErrors());
  //   }

  //   if (reviewError) {
  //     dispatch(clearErrors());
  //   }

  //   if (success) {
  //     dispatch({ type: NEW_REVIEW_RESET });
  //   }
  //   dispatch(getProductDetails(match.params.id));
  // }, [dispatch, match.params.id, error, reviewError, success]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <ReactTitle title={`${product.name} -- ECOMMERCE`} />
          <div className="ProductDetails">
            <div>
              <Carousel>
                {
                  [{
                    url:image
                  },
                  {
                    url:image
                  },
                  {
                    url:image
                  },
                  {
                    url:image
                  },].map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <Rating {...options} />
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    disabled={product.Stock < 1 ? true : false}
                    // onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>

              <button 
              onClick={submitReviewToggle} 
              className="submitReview">
                Submit Review
              </button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
          {
            <div className="reviews">
              {
                [{
                  _id:1,
                  review:{
                    name:"Ashok Sahu",
                    comment:'This is a good product',
                    rating:5
                  }
                },
                {
                  _id:1,
                  review:{
                    name:"subham gouda",
                    comment:'This is a good product',
                    rating:5
                  }
                },
                {
                  _id:1,
                  review:{
                    name:"D.tushar ",
                    comment:'This is very worst',
                    rating:1
                  }
                }
              ].map((review) => (
                  <ReviewCard key={review._id} review={review.review} />
                ))
              }
            </div>
          }
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state)=>{
  return{
    productDetails:state.productDetails
  }
}



export default connect(mapStateToProps,actions)(ProductDetails);
