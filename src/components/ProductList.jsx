import React from 'react'; // Import React
import ProductItem from './ProductItem'; // Import the ProductItem child component
import './ProductList.css'; // Import styling for this component

// Functional component that receives the products array via props
function ProductList({ products }) {
  return (
    <div className="product-list">
      {/* Loop through each product and render a ProductItem component */}
      {products.map(product => (
        // Pass the product object as a prop to ProductItem
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList; // Export this component so App.jsx can use it
