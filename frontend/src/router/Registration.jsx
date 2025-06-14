import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/joy/Snackbar";
import { CircleAlert } from "lucide-react";

export default function Registration() {
  const API_URL = import.meta.env.VITE_API_USER_ENDPOINT;
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // stato per lo snackbar
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/addUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
        email: email,
        password: password,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          navigate("/homepage/" + data.userId);
        });
      } else {
        // window.alert("Errore" + response.statusText);
        setSnackbar({
          open: true,
          message: response.json().then((data) => {
            return data.message;
          }),
        });
      }
    });
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "0 auto",
        width: "100%",
        height: "100vh",
        alignItems: "center",
        backgroundColor: "var(--text-foreground)",
      }}
    >
      <h1 style={{ marginBottom: "0" }}>Welcome to the Marketplace</h1>
      <p style={{ color: "var(--text-color-secondary)", marginTop: "0.5em" }}>
        {"Please register to continue. If you already have an account, please" +
          " "}
        <a
          href="/login"
          style={{
            color: "inherit",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          login
        </a>
        .
      </p>
      <div
        style={{
          paddingTop: "2em",
          width: "20%",
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Campo Nome */}
          <div className="form-group">
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              label="Name"
              variant="outlined"
              size="small"
              slotProps={{
                htmlInput: { type: "text" },
              }}
            />
          </div>
          {/* Campo Surname */}
          <div className="form-group">
            <TextField
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              id="surname"
              label="Surname"
              size="small"
              variant="outlined"
              slotProps={{
                htmlInput: { type: "text" },
              }}
            />
          </div>
          {/* Campo email */}
          <div className="form-group">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              slotProps={{ htmlInput: { type: "email" } }}
            />
          </div>
          {/* Campo Password */}
          <div className="form-group">
            <TextField
              id="password"
              label="Password"
              size="small"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              slotProps={{
                htmlInput: {
                  type: showPassword ? "text" : "password",
                  min: "6",
                },
              }}
              // Aggiungi icona a destra
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Eye /> : <EyeOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          {/* Bottone */}
          <Button
            variant="contained"
            type="submit"
            size="medium"
            style={{ width: "100%" }}
          >
            Register
          </Button>
          <Snackbar
            color="danger"
            variant="outlined"
            open={snackbar.open}
            onClose={() => setSnackbar({ open: false })}
            autoHideDuration={3000}
            startDecorator={<CircleAlert />}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            {snackbar.message}
          </Snackbar>
        </form>
      </div>
    </main>
  );
}
