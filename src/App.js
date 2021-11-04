import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { CursorProvider } from "react-cursor-custom";
import { settings } from "./portfolio";
import ReactGA from "react-ga";
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID, {
        testMode: process.env.NODE_ENV === "test",
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  useEffect(() => {
    alanBtn({
      key: "f553750d34d472dfb3303245a271cf842e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command == "linkedin") {
          window.open(
            "https://www.linkedin.com/in/alan-binu-95025015a/",
            "_blank"
          );
        } else if (commandData.command == "github") {
          window.open("https://github.com/AlanBinu00", "_blank");
        } else if (commandData.command == "blog") {
          window.open("https://hashnode.com/@alanbinu", "_blank");
        } else if (commandData.command == "latestwork") {
          window.open(
            "https://github.com/AlanBinu007?tab=repositories",
            "_blank"
          );
        } else if (commandData.command == "mailto") {
          window.open("mailto:alanbinu5@gmail.com", "_blank");
        } else if (commandData.command == "linkedinmesg") {
          window.open("https://www.linkedin.com/in/alan-binu/", "_blank");
        } else if (commandData.command == "emailmesg") {
          window.open("mailto:alanbinu5@gmail.com", "_blank");
        }
      },
    });
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const useCursor = settings.useCustomCursor;

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div>
          {useCursor ? (
            <CursorProvider
              color={themes[theme].secondaryText}
              ringSize={25}
              transitionTime={75}
            >
              <Main theme={themes[theme]} setTheme={setTheme} />
            </CursorProvider>
          ) : (
            <Main theme={themes[theme]} setTheme={setTheme} />
          )}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
