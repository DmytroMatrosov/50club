import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import Grow from "@mui/material/Grow";

import ro from "../assets/ro.jpg";

const Glückwunsch = () => {
  const [isAwesome, setIsAwesome] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Geschenk");
  };

  return (
    <>
      <Container
        sx={{
          margin: "20px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grow in timeout={1000} unmountOnExit>
          <Typography variant="h6">
            Herzliche Glückwünsche zum Geburtstag!
          </Typography>
        </Grow>
        <Grow in timeout={1000} unmountOnExit>
          <Avatar
            src={ro}
            variant="rounded"
            sx={{
              boxShadow: 5,
              margin: "48px 0",
              width: "280px",
              height: "330px",
            }}
          />
        </Grow>
        <Grow in timeout={1000} unmountOnExit>
          <Typography variant="h6" sx={{ margin: "50px 0" }}>
            Wenn dir das Leben einen Geburtstag schenkt – mach ein Fest daraus!
          </Typography>
        </Grow>

        <Grow in timeout={3000} unmountOnExit>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FormControlLabel
              value={isAwesome}
              onChange={(e) => setIsAwesome(!isAwesome)}
              control={<Checkbox value="remember" color="primary" />}
              label="Ich werde noch cooler!"
            />
            <Button
              onClick={handleButtonClick}
              variant="contained"
              disabled={!isAwesome}
            >
              Geschenk bekommen
            </Button>
          </Box>
        </Grow>
      </Container>
    </>
  );
};

export default Glückwunsch;
