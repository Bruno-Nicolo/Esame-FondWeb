import { Header } from "../components/header";
import { Filter } from "../components/filter";
import { ItemGrid } from "../components/item-grid";
import { useEffect, useState } from "react";
import { Frown } from "lucide-react";
import { useParams } from "react-router-dom";

function HomePage() {
  let { userId } = useParams();
  const [items, setItems] = useState([]);
  const API_URL = import.meta.env.VITE_API_ITEM_ENDPOINT;

  useEffect(() => {
    // prende gli item dal db
    fetch(`${API_URL}/${userId}/homepage`).then((response) => {
      response.json().then((data) => {
        setItems(data);
      });
    });
  }, [userId, API_URL]);

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
