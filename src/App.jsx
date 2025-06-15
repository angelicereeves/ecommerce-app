import React, { useState } from 'react'; // Import React and useState hook
import ProductList from './components/ProductList'; // Import the ProductList child component
import './App.css'; // Import app CSS

function App() {
  // Initialize product state (creating an array of objects, each representing a product)
  const [products] = useState([
    // Each object contains product details including name, price, description, category, and image
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      description: 'High-quality sound with noise cancellation.',
      category: 'Electronics',
      image: 'https://myhypergear.com/cdn/shop/products/15611_HYG_Vibe_Wireless_Headphones_Blue_001.jpg?v=1644943807'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      description: 'Track your fitness and receive notifications.',
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/71pbEc1KO3L.jpg'
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 49.99,
      description: 'Portable and powerful sound on the go.',
      category: 'Electronics',
      image: 'https://www.sencor.com/getmedia/6770caad-d0be-4d0d-b5f0-01bbc4c1c555/35059169.jpg.aspx?width=2100&height=2100&ext=.jpg'
    },
    {
      id: 4,
      name: 'Running Shoes',
      price: 129.99,
      description: 'Comfortable shoes designed for performance.',
      category: 'Footwear',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZKGPeLr6t-7at73_bJPFxY8Ia1oFDW2MTzw&s'
    },
    {
      id: 5,
      name: 'Leather Wallet',
      price: 39.99,
      description: 'Stylish and durable genuine leather wallet.',
      category: 'Accessories',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRmIiPHOdBYS_f92c4xxpYfv7pb0ydABKF9Q&s'
    },
    {
      id: 6,
      name: 'Backpack',
      price: 59.99,
      description: 'Spacious and comfortable backpack for daily use.',
      category: 'Accessories',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRImLVmLD411vOhMAhvMMHOd0cg49_RBskifw&s'
    },
    {
      id: 7,
      name: 'Gaming Mouse',
      price: 59.99,
      description: 'Precision performance with customizable buttons.',
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/61AcT0ZuO3L.jpg'
    },
    {
      id: 8,
      name: 'Sunglasses',
      price: 29.99,
      description: 'UV-protected stylish sunglasses for sunny days.',
      category: 'Accessories',
      image: 'https://sunhauk.com/cdn/shop/files/SuperBlack-Polarized-Sunglasses-2.png?v=1735779822&width=1946'
    },
    {
      id: 9,
      name: 'Yoga Mat',
      price: 34.99,
      description: 'Eco-friendly, non-slip surface for all workouts.',
      category: 'Fitness',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8NCP2YxPrn-m4GFs9kCl-f2ZxJCzeLr4trw&s'
    },
    {
      id: 10,
      name: 'Travel Mug',
      price: 24.99,
      description: 'Keeps drinks hot or cold for hours on the go.',
      category: 'Home & Kitchen',
      image: 'https://eu.yeti.com/cdn/shop/files/Drinkware_MugMS_20oz_Navy_Studio_PrimaryB_8827be4b-bf13-4d80-872f-6da628095a2b.png?v=1718611963&width=1500'
    },
    {
      id: 11,
      name: 'Desk Lamp',
      price: 44.99,
      description: 'LED desk lamp with brightness adjustment.',
      category: 'Home & Kitchen',
      image: 'https://i.etsystatic.com/7279722/r/il/63a910/1663885781/il_fullxfull.1663885781_hqr8.jpg'
    },
    {
      id: 12,
      name: 'Wireless Charger',
      price: 99.99,
      description: 'Charge your phone cable-free with fast charging.',
      category: 'Electronics',
      image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HRW22?wid=6678&hei=6137&fmt=jpeg&qlt=90&.v=1729717031084'
    }
  ]);

  // Category selection state for filtering
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Create a unique list of categories from the product list
  // Use for loop to iterate through products
  // Check if the category already exists in the categories array
  // If not, add it to the categories array
  let categories = ['All'];
  for (let i = 0; i < products.length; i++) { 
    let category = products[i].category;
    if (!categories.includes(category)) {
      categories.push(category);
    }
  }

  // Filter the products based on selected category using if else statement
  // If 'All' is selected, show all products; otherwise, filter by category
  let filteredProducts = [];
  if (selectedCategory === 'All') {
    filteredProducts = products;
  } else {
    for (let i = 0; i < products.length; i++) {
      if (products[i].category === selectedCategory) {
        filteredProducts.push(products[i]);
      }
    }
  }

  // Render the App component
  return (
    <div className="app">
      <h1>Product Listings</h1>

      {/* Category Filter Section */}
      <div className="filter-controls">
        <p><strong>Filter by Category:</strong></p>
        <div className="category-buttons">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={selectedCategory === cat ? 'active' : ''}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Render filtered products via ProductList component */}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
