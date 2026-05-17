import { useEffect, useState } from "react";
import "./seachbar.css";

function SearchBar() {
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  
  useEffect(() => {
    if (!debouncedQuery) {
      return;
    }

    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${debouncedQuery}`,
        );
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, [debouncedQuery]);

  return (
    <div className="search_bar_container">
      <input
        className={`search_bar ${isSearching ? "active" : ""}`}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsSearching(true)}
        onBlur={() => {
          setTimeout(() => setIsSearching(false), 150);
        }}
        placeholder="Search products..."
      />

      {/* 🔥 Results */}
      {isSearching && products.length > 0 && (
        <div className="results">
          {products.map((item) => (
            <div key={item.id} className="result_item">
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <p>{item.title}</p>
                <span>₹ {item.price}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
