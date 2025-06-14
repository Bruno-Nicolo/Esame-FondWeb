import { Heart } from "lucide-react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ItemDialog from "./item-card";
import { Trash2 } from "lucide-react";

export function Announcement({ item, onProfilePage, handleAction }) {
  let { userId } = useParams();

  const didAuthorLike = () => {
    const peopleWhoLiked = item.likedBy;
    return peopleWhoLiked.includes(userId);
  };

  const [isLikedState, setIsLiked] = useState(didAuthorLike());
  const API_URL = import.meta.env.VITE_API_ITEM_ENDPOINT;

  const addToFavorites = () => {
    setIsLiked(true);
    fetch(`${API_URL}/${userId}/${item._id}/addToFavorite`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const removeFromFavorites = () => {
    setIsLiked(false);
    handleAction(item._id);
  };

  return (
    <div className="announcement" style={{ position: "relative" }}>
      <img
        src={item.imageURL}
        alt={item.title}
        style={{
          marginBottom: "0.75em",
        }}
      />
      <div style={{ marginLeft: "0.25em" }}>
        {/* Modale che si apre quando si clicca sull'annuncio */}
        <ItemDialog item={item} />
        <p
          style={{
            color: "var(--text-color-secondary)",
            margin: "0.2em",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
          }}
          title={item.description}
        >
          <span>{item.description}</span>
        </p>
        <h2 style={{ fontWeight: "bold", fontSize: "1.15em" }}>
          €{item.price}
        </h2>

        {/* Nella homepage mostra il cuore, per la pagina del profilo non mostrare niente */}
        {!onProfilePage ? (
          !isLikedState ? (
            // Cuore vuoto
            <Heart className="heart-icon" onClick={addToFavorites} />
          ) : (
            // Cuore pieno
            <Heart
              className="heart-icon"
              fill={"var(--secondary-color)"}
              stroke={"var(--secondary-color)"}
              onClick={removeFromFavorites}
            />
          )
        ) : (
          <Trash2
            className="heart-icon"
            onClick={() => handleAction(item._id)}
          />
        )}
      </div>
    </div>
  );
}
