import { Header } from "../components/header";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/joy/Snackbar";
import { CircleAlert, CircleCheck } from "lucide-react";
import { useParams } from "react-router-dom";

export default function CreateItem() {
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

  const API_URL = import.meta.env.VITE_API_ITEM_ENDPOINT;
  let { userId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    added: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/addItem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: userId,
        title: title,
        description: description,
        price: price,
        imageURL: image,
        category: category,
      }),
    }).then((response) => {
      if (response.ok) {
        setSnackbar({
          open: true,
          message: "Item added",
          added: true,
        });
        // Resetta i campi del form
        setTitle("");
        setDescription("");
        setPrice("");
        setImage("");
        setCategory("");
      } else {
        setSnackbar({
          open: true,
          message: response.json().then((data) => {
            return data.message;
          }),
          added: false,
        });
      }
    });
  };

  return (
    <div>
      <Header />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "5em",
        }}
      >
        <div
          style={{
            width: "30%",
            backgroundColor: "var(--text-foreground)",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
            borderRadius: "0.5em",
            padding: "2em",
          }}
        >
          <h1>Post a new item</h1>

          <form onSubmit={handleSubmit}>
            {/* Campo Titolo */}
            <div className="form-group">
              <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                label="Item Title"
                variant="outlined"
                slotProps={{
                  htmlInput: { type: "text" },
                }}
              />
            </div>
            {/* Campo Descrizione */}
            <div className="form-group">
              <textarea
                type="text"
                id="description"
                name="description"
                placeholder="es. A nice shirt to go partying..."
                maxLength={100}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {/* Campo Prezzo */}
            <div className="form-group">
              <TextField
                id="price"
                label="Price (€)"
                variant="outlined"
                slotProps={{ htmlInput: { type: "number", min: "1" } }}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            {/* Campo Immagine */}
            <div className="form-group">
              <TextField
                id="image"
                label="Image URL"
                variant="outlined"
                slotProps={{ htmlInput: { type: "url" } }}
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            {/* Campo Categoria */}
            <div className="form-group">
              <TextField
                id="category"
                select
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            {/* Bottone */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained" type="submit">
                Post
              </Button>
            </div>
            {/* Mostra un messaggio quando l'utente aggiunge un oggetto (errore o tutto ok) */}
            <Snackbar
              color={snackbar.added == false ? "danger" : "success"}
              variant="outlined"
              open={snackbar.open}
              onClose={() => setSnackbar({ open: false })}
              autoHideDuration={3000}
              startDecorator={
                snackbar.added == false ? <CircleAlert /> : <CircleCheck />
              }
            >
              {snackbar.message}
            </Snackbar>
          </form>
        </div>
      </main>
    </div>
  );
}
