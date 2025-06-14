import { ItemGrid } from "../components/item-grid";
import { Header } from "../components/header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Frown } from "lucide-react";
import { Propic } from "../components/ProPic";

export function Profile() {
  const API_USER_URL = import.meta.env.VITE_API_USER_ENDPOINT;
  const API_ITEM_URL = import.meta.env.VITE_API_ITEM_ENDPOINT;
  let { userId } = useParams();
  const [items, setItems] = useState([]);

  const [user, setUser] = useState({
    name: "",
    surname: "",
  });

  const handleDelete = (itemId) => {
    // cancella post e aggiorna lista
    fetch(`${API_ITEM_URL}/${userId}/delete/${itemId}`, {
      method: "DELETE",
    }).then(async (response) => {
      if (response.ok) {
        const { items } = await response.json();
        setItems(items);
      }
    });
  };

  useEffect(() => {
    fetch(`${API_USER_URL}/${userId}`).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setUser(data);
        });
      }
    });

    fetch(`${API_USER_URL}/${userId}/items`).then((response) => {
      response.json().then((data) => {
        setItems(data);
      });
    });
  }, [userId, API_USER_URL]);

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="profile-container">
          <Propic name={user.name} surname={user.surname} />
          <div style={{ flexGrow: 4 / 5 }}>
            <h1>
              {user.name} {user.surname}
            </h1>
          </div>
          <div>
            <h2>Posted</h2>
            <h3 style={{ textAlign: "center" }}>{items.length}</h3>
          </div>
        </div>

        {items.length == 0 ? (
          <NoItemsFound />
        ) : (
          <ItemGrid
            items={items}
            onProfilePage={true}
            handleAction={handleDelete}
          />
        )}
      </div>
    </>
  );
}

function NoItemsFound() {
  return (
    <div className="no-items-found">
      <Frown size={60} />
      <span>No items posted yet</span>
    </div>
  );
}
