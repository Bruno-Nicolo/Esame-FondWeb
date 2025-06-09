import { useState } from "react";

export function Filter() {
  const categories = [
    "Technology",
    "Clothing",
    "Accessories",
    "Home",
    "Beauty",
    "Sports",
    "Toys",
    "Health",
    "Books",
  ].sort();

  // Stato per la categoria selezinata
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  return (
    <div className="filter">
      <FilterItem
        categoria="All categories"
        isSelected={selectedCategory === "All categories"}
        onSelect={() => setSelectedCategory("All categories")}
      />

      {categories.map((categoria, index) => {
        return (
          <FilterItem
            key={index}
            categoria={categoria}
            isSelected={selectedCategory === categoria}
            onSelect={() => setSelectedCategory(categoria)}
          />
        );
      })}
    </div>
  );
}

function FilterItem({ categoria, isSelected, onSelect }) {
  return (
    <p onClick={onSelect} className={isSelected ? "selected" : ""}>
      {categoria}
    </p>
  );
}
