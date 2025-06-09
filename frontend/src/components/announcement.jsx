import { Heart } from "lucide-react";
import { useState } from "react";
import ItemDialog from "./item-card";

export function Announcement({
  title,
  description,
  price,
  imagePath,
  category,
  author,
  isLiked,
  onProfilePage,
}) {
  const [isLikedState, setIsLiked] = useState(isLiked);

  return (
    <div className="announcement" style={{ position: "relative" }}>
      <img
        src={imagePath}
        alt="Announcement"
        style={{
          marginBottom: "0.75em",
        }}
      />
      <div style={{ marginLeft: "0.25em" }}>
        <ItemDialog
          title={title}
          description={description}
          price={price}
          category={category}
          image={imagePath}
          author={author}
        />
        <p
          style={{
            color: "var(--text-color-secondary)",
            margin: "0.2em",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
          }}
          title={description}
        >
          <span>{description}</span>
        </p>
        <h2 style={{ fontWeight: "bold", fontSize: "1.15em" }}>€{price}</h2>

        {!onProfilePage &&
          (!isLikedState ? (
            // Cuore vuoto
            <Heart
              className="heart-icon"
              onClick={() => {
                setIsLiked(true);
              }}
            />
          ) : (
            // Cuore pieno
            <Heart
              className="heart-icon"
              fill={"var(--secondary-color)"}
              stroke={"var(--secondary-color)"}
              onClick={() => {
                setIsLiked(false);
              }}
            />
          ))}
      </div>
    </div>
  );
}
