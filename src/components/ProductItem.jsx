import React from 'react'; // Import React
import './ProductItem.css'; // Import styles for this component

// Functional component that receives a single product via props
function ProductItem({ product }) {
  // Destructure product properties for easier access
  const { name, price, description, category, image } = product;

  return (
    <div className="product-item">
      {/* Display the product image */}
      <img src={image} alt={name} className="product-image" />

      {/* Display product details */}
      <h2>{name}</h2>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Price:</strong> ${price.toFixed(2)}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProductItem; // Export this component so ProductList.jsx can use it
