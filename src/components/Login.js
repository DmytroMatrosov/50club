import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

import Grow from "@mui/material/Grow";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import { auth } from "../Auth";

import klub from "../assets/le50.png";

const Login = () => {
  const navigate = useNavigate();

  const { isAuth, setIsAuth } = useContext(AuthContext);

  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [isAge, setIsAge] = useState(false);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    auth({
      person: {
        vorname,
        nachname,
      },
      setAuth: setIsAuth,
    });
  };
  return (
    <>
      {/* place for logo */}
      <Container maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grow in timeout={800}>
            <Box
              component="img"
              alt="50 klub"
              sx={{ maxWidth: "100%" }}
              src={klub}
            />
          </Grow>
          <Grow in timeout={1000} unmountOnExit>
            <Typography component="h1" variant="h6">
              Hallo, bitte bestätigen Sie Ihre Identität.
            </Typography>
          </Grow>
          <Grow in timeout={1250} unmountOnExit>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="vorname"
                name="vorname"
                label="Vorname"
                value={vorname}
                onChange={(e) => setVorname(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="nachname"
                name="nachname"
                label="Nachname"
                value={nachname}
                onChange={(e) => setNachname(e.target.value)}
              />
              <FormControlLabel
                value={isAge}
                onChange={(e) => setIsAge(!isAge)}
                control={<Checkbox value="remember" color="primary" />}
                label="Ich stimme zu, weiterhin großartig zu sein!"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!isAge}
              >
                Login
              </Button>
            </Box>
          </Grow>
        </Box>
      </Container>
    </>
  );
};

export default Login;
