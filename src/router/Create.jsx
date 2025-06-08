import { Header } from "../components/header";
import React from "react";

export default function CreateItem() {
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
              <label htmlFor="title">Article Name</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="es. Shirt"
              />
            </div>
            {/* Campo Descrizione */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                id="description"
                name="description"
                placeholder="es. A nice shirt to go partying..."
                style={{
                  height: "8em",
                }}
                maxLength={100}
              />
            </div>
            {/* Campo Prezzo */}
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="€ EUR"
              />
            </div>
            {/* Campo Immagine */}
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="url"
                id="image"
                name="image"
                placeholder="es. https://nice.image.com"
              />
            </div>
            {/* Campo Categoria */}
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select className="form-select" placeholder="Select a category">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            {/* Bottone */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button type="submit">Post</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
