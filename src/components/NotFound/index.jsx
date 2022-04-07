import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "../../assets/style/components/notFound.scss"
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <ErrorIcon />

      <Typography>Page Not Found </Typography>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
