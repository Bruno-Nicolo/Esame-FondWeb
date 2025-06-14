import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Chip from "@mui/material/Chip";
import { Propic } from "./ProPic";

export default function ItemDialog({ item }) {
  const [open, setOpen] = React.useState(false);

  const API_URL = import.meta.env.VITE_API_USER_ENDPOINT;
  const [user, setUser] = React.useState({
    name: "",
    surname: "",
    email: "",
  });
  React.useEffect(() => {
    fetch(`${API_URL}/${item.author}`).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setUser(data);
        });
      }
    });
  }, [item.author, API_URL]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* Trigger del dialog */}
      <p className="announcement-title" onClick={handleClickOpen}>
        {item.title}
      </p>
      <Dialog fullWidth maxWidth="lg" open={open} onClose={handleClose}>
        <DialogContent id="item-dialog-description">
          {/* immagina a sx */}
          <img src={item.imageURL} alt={item.title} />
          <div style={{ width: "100%" }}>
            {/* item info */}
            <div>
              <h2>{item.title}</h2>
              <p
                style={{
                  color: "var(--text-color-secondary)",
                  maxWidth: "100%",
                }}
              >
                {item.description}
              </p>
              {/* Badge categoria */}
              <Chip label={item.category} variant="outlined" color="primary" />
              <h1>€{item.price}</h1>
            </div>

            {/* info utente */}
            <div className="user-info">
              <Propic name={user.name} surname={user.surname} />

              <div style={{ flexGrow: 4 / 5 }}>
                <h2>
                  {user.name} {user.surname}
                </h2>
                <p style={{ color: "var(--text-color-secondary)" }}>
                  contact at: {user.email}
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
