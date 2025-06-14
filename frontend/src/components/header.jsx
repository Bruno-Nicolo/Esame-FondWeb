import { House, CirclePlus, Heart, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Propic } from "./ProPic";
import { useEffect, useState } from "react";

export function Header() {
  let { userId } = useParams();
  const API_URL = import.meta.env.VITE_API_USER_ENDPOINT;
  const [user, setUser] = useState({
    name: "",
    surname: "",
  });

  useEffect(() => {
    fetch(`${API_URL}/${userId}`).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setUser(data);
        });
      }
    });
  });
  return (
    <header>
      <h1>Marketplace</h1>
      <div>
        <p>
          <Link to={`/homepage/${userId}`}>Home</Link>
        </p>
        <House />
      </div>
      <div>
        <Link to={`/create/${userId}`}>
          <p>Create</p>
        </Link>
        <CirclePlus />
      </div>
      <div>
        <Link to={`/favourites/${userId}`}>
          <p>Favourites</p>
        </Link>
        <Heart />
      </div>
      <div>
        <Link to={`/profile/${userId}`}>
          <Propic name={user.name} surname={user.surname} headerSection />
        </Link>
      </div>
    </header>
  );
}
