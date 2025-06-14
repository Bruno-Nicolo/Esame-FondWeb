import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { ItemGrid } from "../components/item-grid";
import { useParams } from "react-router-dom";
import { Frown } from "lucide-react";

function Favourite() {
  const [items, setItems] = useState([]);
  const API_USER_URL = import.meta.env.VITE_API_USER_ENDPOINT;
  const API_ITEM_URL = import.meta.env.VITE_API_ITEM_ENDPOINT;
  const { userId } = useParams();

  useEffect(() => {
    fetch(`${API_USER_URL}/${userId}/items?q=like`).then((response) => {
      response.json().then((data) => {
        setItems(data);
      });
    });
  }, [API_USER_URL, userId]);

  const removeFromFavorites = (itemId) => {
    fetch(`${API_ITEM_URL}/${userId}/${itemId}/removeFromFavorite`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const { items } = await response.json();
      setItems(items);
    });
  };

  return (
    <>
      <div>
        <Header />
        {items.length == 0 ? (
          <NoItemsFound />
        ) : (
          <ItemGrid items={items} handleAction={removeFromFavorites} />
        )}
      </div>
    </>
  );
}

export default Favourite;

function NoItemsFound() {
  return (
    <div className="no-items-found">
      <Frown size={60} />
      <span>No liked items</span>
    </div>
  );
}
