export function Filter() {
  // Ecommerce Categories
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

  return (
    <div className="filter">
      <p>All categories</p>
      {categories.map((categoria, index) => {
        return <p key={index}>{categoria}</p>;
      })}
    </div>
  );
}
