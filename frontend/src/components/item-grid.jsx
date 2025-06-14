import { Announcement } from "./announcement";

export function ItemGrid({ items, onProfilePage, handleAction }) {
  return (
    <main className="announcements-container">
      {items.map((item) => (
        <Announcement
          key={item._id}
          item={item}
          onProfilePage={onProfilePage}
          handleAction={handleAction}
        />
      ))}
    </main>
  );
}
