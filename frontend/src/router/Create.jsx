import { Header } from "../components/header";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

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

          <form
            onSubmit={() => {
              // Aggiorna il DB
            }}
          >
            {/* Campo Titolo */}
            <div className="form-group">
              <TextField
                id="name"
                label="Item Name"
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
              />
            </div>
            {/* Campo Prezzo */}
            <div className="form-group">
              <TextField
                id="price"
                label="Price (€)"
                variant="outlined"
                slotProps={{ htmlInput: { type: "number", min: "1" } }}
              />
            </div>
            {/* Campo Immagine */}
            <div className="form-group">
              <TextField
                id="image"
                label="Image URL"
                variant="outlined"
                slotProps={{ htmlInput: { type: "url" } }}
              />
            </div>
            {/* Campo Categoria */}
            <div className="form-group">
              <TextField id="category" select label="Category">
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
          </form>
        </div>
      </main>
    </div>
  );
}
