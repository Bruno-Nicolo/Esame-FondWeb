import { Header } from "../components/header";
import { Filter } from "../components/filter";
import { ItemGrid } from "../components/item-grid";
import { useEffect, useState } from "react";
import { Frown } from "lucide-react";

function HomePage() {
  // dal db
  const items = [
    {
      id: 1,
      title: "Wireless Mouse",
      description: "Ergonomic wireless mouse with long battery life.",
      price: 15,
      imagePath:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
      isLiked: false,
      category: "Technology",
    },
    {
      id: 2,
      title: "Yoga Mat",
      description: "Non-slip yoga mat for all types of exercises.",
      price: 25,
      imagePath:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      isLiked: true,
      category: "Sports",
    },
    {
      id: 3,
      title: "Sunglasses",
      description: "Stylish sunglasses with UV protection.",
      price: 18,
      imagePath:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      isLiked: false,
      category: "Accessories",
    },
    {
      id: 4,
      title: "Cookbook",
      description: "Delicious recipes from around the world.",
      price: 12,
      imagePath:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
      isLiked: true,
      category: "Books",
    },
    {
      id: 5,
      title: "Face Cream",
      description: "Hydrating face cream for daily use.",
      price: 22,
      imagePath:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      isLiked: false,
      category: "Beauty",
    },
    {
      id: 6,
      title: "Throw Pillow",
      description: "Soft decorative pillow for your living room.",
      price: 14,
      imagePath:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      isLiked: false,
      category: "Home",
    },
    {
      id: 7,
      title: "Children's Puzzle",
      description: "Colorful puzzle game for kids aged 3+.",
      price: 9,
      imagePath:
        "https://images.unsplash.com/photo-1508896694512-1eade558679c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG95fGVufDB8fDB8fHww",
      isLiked: true,
      category: "Toys",
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState("All categories");

  useEffect(() => {
    document.querySelectorAll(".filter p").forEach((item) => {
      item.addEventListener("click", (event) => {
        setSelectedFilter(event.target.innerHTML);
      });
    });
  }, []);

  const filteredItems =
    selectedFilter === "All categories"
      ? items
      : items.filter((item) => item.category === selectedFilter);

  return (
    <>
      <div>
        <Header />
        <Filter />
        {filteredItems.length > 0 ? (
          <ItemGrid items={filteredItems} />
        ) : (
          <NoItemsFound />
        )}
      </div>
    </>
  );
}

export default HomePage;

function NoItemsFound() {
  return (
    <div className="no-items-found">
      <Frown size={60} />
      <span>No items found for this category</span>
    </div>
  );
}
