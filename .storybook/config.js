import React, { StrictMode } from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "emotion-theming";
const Wrapper = storyFn => (
  <StrictMode>
    <ThemeProvider theme={{}}>{storyFn()}</ThemeProvider>
  </StrictMode>
);
addDecorator(Wrapper);
// automatically import all files ending in *.stories.js
const req = require.context("../packages", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
