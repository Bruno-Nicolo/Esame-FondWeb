import { House, CirclePlus, Heart, User } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <h1>Marketplace</h1>
      <div>
        <p>
          <Link to="/">Home</Link>
        </p>
        <House />
      </div>
      <div>
        <Link to="/create">
          <p>Create</p>
        </Link>
        <CirclePlus />
      </div>
      <div>
        <Link to="/favorites">
          <p>Favorites</p>
        </Link>
        <Heart />
      </div>
      <div>
        <Link to="/profile">
          <p>Profile</p>
        </Link>
        <User />
      </div>
    </header>
  );
}
