import { ItemGrid } from "../components/item-grid";
import { Header } from "../components/header";

export function Profile() {
  // Items dell'utente x
  const items = [
    {
      id: 1,
      title: "Shirt",
      description: "A nice shirt to go partying...",
      price: 10,
      imagePath:
        "https://clinicalaveterinaria.it/wp-content/uploads/2023/11/giornata-gatti-nero.jpg",
      isLiked: false,
    },
    {
      id: 2,
      title: "Pants",
      description: "A nice pants to go partying...",
      price: 20,
      imagePath:
        "https://clinicalaveterinaria.it/wp-content/uploads/2023/11/giornata-gatti-nero.jpg",
      isLiked: false,
    },
    {
      id: 3,
      title: "Shoes",
      description: "A nice shoes to go partying...",
      price: 30,
      imagePath:
        "https://clinicalaveterinaria.it/wp-content/uploads/2023/11/giornata-gatti-nero.jpg",
      isLiked: false,
    },
    {
      id: 3,
      title: "Shoes",
      description: "A nice shoes to go partying...",
      price: 30,
      imagePath:
        "https://clinicalaveterinaria.it/wp-content/uploads/2023/11/giornata-gatti-nero.jpg",
      isLiked: false,
    },
    {
      id: 3,
      title: "Shoes",
      description: "A nice shoes to go partying...",
      price: 30,
      imagePath:
        "https://clinicalaveterinaria.it/wp-content/uploads/2023/11/giornata-gatti-nero.jpg",
      isLiked: false,
    },
    {
      id: 3,
      title: "Shoes",
      description: "A nice shoes to go partying...",
      price: 30,
      imagePath:
        "https://clinicalaveterinaria.it/wp-content/uploads/2023/11/giornata-gatti-nero.jpg",
      isLiked: false,
    },
    {
      id: 3,
      title: "Shoes",
      description: "A nice shoes to go partying...",
      price: 30,
      imagePath:
        "https://clinicalaveterinaria.it/wp-content/uploads/2023/11/giornata-gatti-nero.jpg",
      isLiked: false,
    },
    {
      id: 3,
      title: "Shoes",
      description: "A nice shoes to go partying...",
      price: 30,
      imagePath:
        "https://clinicalaveterinaria.it/wp-content/uploads/2023/11/giornata-gatti-nero.jpg",
      isLiked: false,
    },
    {
      id: 3,
      title: "Shoes",
      description: "A nice shoes to go partying...",
      price: 30,
      imagePath:
        "https://clinicalaveterinaria.it/wp-content/uploads/2023/11/giornata-gatti-nero.jpg",
      isLiked: false,
    },
    {
      id: 3,
      title: "Shoes",
      description: "A nice shoes to go partying...",
      price: 30,
      imagePath:
        "https://clinicalaveterinaria.it/wp-content/uploads/2023/11/giornata-gatti-nero.jpg",
      isLiked: false,
    },
    {
      id: 3,
      title: "Shoes",
      description: "A nice shoes to go partying...",
      price: 30,
      imagePath:
        "https://clinicalaveterinaria.it/wp-content/uploads/2023/11/giornata-gatti-nero.jpg",
      isLiked: false,
    },
  ];

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
          <img src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" />
          <div style={{ flexGrow: 4 / 5 }}>
            <h1>John Doe</h1>
            <p style={{ color: "var(--text-color-secondary)" }}>
              Description...
            </p>
          </div>
          <div>
            <h2>Posted</h2>
            <h3 style={{ textAlign: "center" }}>{items.length}</h3>
          </div>
        </div>

        <ItemGrid items={items} onProfilePage={true} />
      </div>
    </>
  );
}
