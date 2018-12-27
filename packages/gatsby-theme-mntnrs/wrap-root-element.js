import React from "react";
import { ThemeProvider } from "emotion-theming";
import { Global, css } from "@emotion/core";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={{}}>
    <Global
      styles={css`
        html {
          font-family: "Inter UI", sans-serif;
        }
        @supports (font-variation-settings: normal) {
          html {
            font-family: "Inter UI var alt", sans-serif;
          }
        }
      `}
    />
    {element}
  </ThemeProvider>
);
