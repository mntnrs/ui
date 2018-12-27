import React, { useState, useRef, useEffect } from "react";
import { Mug } from "react-kawaii";

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

// Hook
function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);

        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}
