import React from "react";
import { Mug } from "react-kawaii";
import { useHover } from "@mntnrs/hooks";

export const Button = props => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div
      css={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Mug size={100} mood={isHovered ? "excited" : "happy"} color="#f1b8e8" />
      <div css={{ paddingLeft: "2rem" }}>
        <button
          ref={hoverRef}
          {...props}
          href="#waitlisted"
          css={{
            fontFamily: "sans-serif",
            border: "3px solid #DA45C3",
            cursor: "pointer",
            "&:hover": { background: "#DA45C3", color: "white" }
          }}
        />
      </div>
    </div>
  );
};
