import { useContext } from "react";
import AuthContext from "./AuthContext";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grow from "@mui/material/Grow";

import ticket from "../assets/ticket.png";

import ConfettiExplosion from 'react-confetti-explosion';

const Geschenk = () => {
  const { setIsAuth } = useContext(AuthContext);
  const handleButtonClick = () => {
    setIsAuth(false);
  };
  return (
    <Container
      sx={{
        maxHeight: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <ConfettiExplosion />
      <Box component="div" className="certificateCard">
        <Grow in timeout={500}>
          <Typography
            component="h2"
            variant="h5"
            sx={{ margin: "50px 0", fontWeight: "semiBold" }}
          >
            Lieber Roberto!
          </Typography>
        </Grow>
        <Grow in timeout={1000}>
          <Typography
            component="h2"
            variant="h5"
            sx={{ margin: "50px 0", fontWeight: "semiBold" }}
          >
            Das ist ein Ticket für einen Roadtrip mit ukrainischen Freunden
          </Typography>
        </Grow>
        <Grow in timeout={1500}>
          <Box
            component="img"
            alt="Ticket."
            sx={{ maxWidth: "100%" }}
            src={ticket}
          />
        </Grow>
      </Box>

      <Grow in timeout={2000}>
        <Button
          variant="text"
          onClick={handleButtonClick}
          sx={{ margin: "20px 0" }}
        >
          Logout
        </Button>
      </Grow>
    </Container>
  );
};

export default Geschenk;
