import { Heart } from "lucide-react";
import { useState } from "react";

export function Announcement({ title, description, price, imagePath }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="announcement" style={{ position: "relative" }}>
      <img
        src={imagePath}
        alt="Announcement"
        style={{
          justifySelf: "center",
          borderRadius: "0.5em",
          width: "100%",
          height: "250px",
          objectFit: "cover",
          objectPosition: "center",
          marginBottom: "0.75em",
        }}
      />
      <div style={{ marginLeft: "0.25em" }}>
        <p style={{ margin: "0", fontSize: "1.15em" }}>{title}</p>
        <p
          style={{
            color: "var(--text-color-secondary)",
            margin: "0.2em",
          }}
        >
          {description}
        </p>
        <h2 style={{ fontWeight: "bold", fontSize: "1.15em" }}>€{price}</h2>
        {!isLiked ? (
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
        )}
      </div>
    </div>
  );
}
