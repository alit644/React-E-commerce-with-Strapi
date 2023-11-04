import "./App.css";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header1 from "./components/Header/Header1";
import Header2 from "./components/Header/Header2";
import Header3 from "./components/Header/Header3";
import Hero from "./components/Hero/Hero";
import MainContect from "./components/Main/MainContect";
import Footer from "./components/Footer/Footer";
import Scroll from "./components/scroll/Scroll";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />

        <Box
          bgcolor={
            // @ts-ignore
            theme.palette.bg.main
          }
        >
          <Hero />
            <MainContect/>
        </Box>
        <Footer/>
        <Scroll/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
