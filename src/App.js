import { useMemo, useState } from "react";
import AuthContext from "./components/AuthContext";
import Routes from "./Routes";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const providerValue = useMemo(
    () => ({ isAuth, setIsAuth }),
    [isAuth, setIsAuth]
  );
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container component="main">
          <CssBaseline />
          <AuthContext.Provider value={providerValue}>
            <Routes />
          </AuthContext.Provider>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
