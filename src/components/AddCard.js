import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "react-responsive";

export default function AddCard(props) {
  const isShrunk = useMediaQuery({ maxWidth: 993 });

  return (
    <div className={`my-component ${isShrunk ? "shrink" : "shadow  "}`}>
      <Card sx={{ maxWidth: 1, marginTop: "15px" }}>
        <CardMedia sx={{ height: 100 }} image={props.image} title="Dummy Add" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dummy Add
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
