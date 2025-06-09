import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Chip from "@mui/material/Chip";
import { SendIcon } from "lucide-react";
import Button from "@mui/material/Button";

export default function ItemDialog({
  title,
  description,
  price,
  category,
  author,
  image,
}) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");

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
        {title}
      </p>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="item-dialog-title"
        aria-describedby="item-dialog-description"
      >
        <DialogContent id="item-dialog-description">
          {/* immagina a sx */}
          <img src={image} alt={title} />
          {/* contenitore a dx con titolo, descrizione, prezzo, categoria */}
          <div style={{ width: "100%" }}>
            {/* info item */}
            <div>
              <h2>{title}</h2>
              <p
                style={{
                  color: "var(--text-color-secondary)",
                  maxWidth: "100%",
                }}
              >
                {description}
              </p>
              <Chip label={category} variant="outlined" color="primary" />
              <h1>€{price}</h1>
            </div>

            {/* info utente */}
            <div className="user-info">
              <img src={author.image} alt={author.name} />
              <div style={{ flexGrow: 4 / 5 }}>
                <h3>{author.name}</h3>
              </div>
            </div>

            <div style={{ marginTop: "2em" }}>
              <label>
                <b>Contact {author.name}:</b>
              </label>
              <textarea
                placeholder="Send a message via email..."
                style={{ marginBottom: "0.5em" }}
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
              />
              <Button
                variant="contained"
                onClick={() => {
                  console.log("Email: ", email);
                  console.log("Email inviata");
                }}
                endIcon={<SendIcon size={18} />}
              >
                Send
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
