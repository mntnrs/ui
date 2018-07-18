import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styled from "react-emotion";

import { colors } from ".";

const Color = styled.div`
  height: 1rem;
  width: 1rem;
    background-color: ${({ color }) => color};
  };
`;
storiesOf("Tokens", module)
  .add("colors", () => (
    <Fragment>{colors.map(color => <Color color={color} />)}</Fragment>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
