# Tokens

Design System Tokens to use everywhere.

## Usage

```javascript
import React from "react";
import { render } from "react-dom";
import ThemeProvider from "emotion-theming";

import tokens from "@mntnrs/tokens";

render(
  <ThemeProvider theme={tokens}>
    <h1>My App</h1>
  </ThemeProvider>,
  document.getElementById("#app")
);
```
