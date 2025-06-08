import { Header } from "../components/header";
import { ItemGrid } from "../components/item-grid";

function HomePage() {
  const items = [
    {
      id: 1,
      title: "Shirt",
      description: "A nice shirt to go partying...",
      price: 10,
      imagePath:
        "https://clinicalaveterinaria.it/wp-content/uploads/2023/11/giornata-gatti-nero.jpg",
      isLiked: true,
    },
    {
      id: 4,
      title: "Shoes",
      description: "A nice shoes to go partying...",
      price: 30,
      imagePath:
        "https://clinicalaveterinaria.it/wp-content/uploads/2023/11/giornata-gatti-nero.jpg",
      isLiked: true,
    },
    {
      id: 5,
      title: "Shoes",
      description: "A nice shoes to go partying...",
      price: 30,
      imagePath:
        "https://clinicalaveterinaria.it/wp-content/uploads/2023/11/giornata-gatti-nero.jpg",
      isLiked: true,
    },
  ];

  return (
    <>
      <div>
        <Header />
        <ItemGrid items={items} />
      </div>
    </>
  );
}

export default HomePage;
