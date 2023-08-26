import { useState, useEffect } from "react";

function FakeStore() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [categorySelector, setCategorySelector] = useState("All");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const searchedProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase()) &&
      (categorySelector === "All" || product.category === categorySelector)
  );

  const categories = [];
  products.forEach((product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });

  return (
    <div>
      <h1>FakeStore Products</h1>
      <input
        type="text"
        placeholder="Search for product..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <div>
        <button onClick={() => setCategorySelector("All")}>
          All Categories
        </button>
        {categories.map((category) => (
          <button key={category} onClick={() => setCategorySelector(category)}>
            {category}
          </button>
        ))}
      </div>

      <ul>
        {searchedProducts.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.category}</p>
            <h4>{product.price}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FakeStore;

/*
import { useState, useEffect } from "react";

function FakeStore() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categoryFilter === "All" || product.category === categoryFilter)
    );
    setFilteredProducts(filtered);
  }, [products, searchTerm, categoryFilter]);

  const categories = [];
  products.forEach((product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });

  return (
    <div>
      <h1>FakeStore Products</h1>
      <input
        type="text"
        placeholder="Search for product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div>
        <button onClick={() => setCategoryFilter("All")}>All Categories</button>
        {categories.map((category) => (
          <button key={category} onClick={() => setCategoryFilter(category)}>
            {category}
          </button>
        ))}
      </div>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.category}</p>
            <h4>{product.price}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FakeStore;
*/
