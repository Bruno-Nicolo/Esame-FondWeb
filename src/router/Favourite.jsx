import { Header } from "../components/header";
import { ItemGrid } from "../components/item-grid";

function HomePage() {
  const items = [
    {
      id: 1,
      title: "Shirt",
      description: "A nice shirt to go partying...",
      price: 10,
      category: "Clothes",
      imagePath:
        "https://clinicalaveterinaria.it/wp-content/uploads/2023/11/giornata-gatti-nero.jpg",
      isLiked: true,
      author: {
        name: "John Doe",
        image:
          "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      },
    },
    {
      id: 4,
      title: "Shoes",
      description: "A nice shoes to go partying...",
      price: 30,
      category: "Shoes",
      imagePath:
        "https://clinicalaveterinaria.it/wp-content/uploads/2023/11/giornata-gatti-nero.jpg",
      isLiked: true,
      author: {
        name: "John Doe",
        image:
          "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      },
    },
    {
      id: 5,
      title: "Shoes",
      description: "A nice shoes to go partying...",
      price: 30,
      category: "Shoes",
      imagePath:
        "https://clinicalaveterinaria.it/wp-content/uploads/2023/11/giornata-gatti-nero.jpg",
      isLiked: true,
      author: {
        name: "John Doe",
        image:
          "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      },
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
