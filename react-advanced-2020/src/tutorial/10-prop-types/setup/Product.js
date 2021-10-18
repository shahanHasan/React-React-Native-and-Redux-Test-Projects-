import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  const url = image && image.url;
  console.log(image, name, price);
  return (
    <article className="product">
      <img src={url || defaultImage} alt={name} />
      <h4>{name || "To be updated"}</h4>
      <p>${price || "To be updated"}</p>
    </article>
  );
};
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   image: defaultImage,
//   name: "To be updated",
//   Price: "To be updated",
// };

export default Product;
