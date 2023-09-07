import * as React from "react";

import Typography from "@mui/material/Typography";

export default function TopBoxes(props) {
  return (
    <div
      className={props.colorBox ? "box2" : "box"}
      onClick={() => props.onclick(props.catid)}
    >
      <Typography variant="p">{props.category}</Typography>
    </div>
  );
}
