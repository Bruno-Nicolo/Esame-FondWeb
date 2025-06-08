import { Announcement } from "./announcement";

export function ItemGrid({ items, onProfilePage }) {
  return (
    <main className="announcements-container">
      {items.map((item) => (
        <Announcement
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          imagePath={item.imagePath}
          isLiked={item.isLiked}
          onProfilePage={onProfilePage}
        />
      ))}
    </main>
  );
}
