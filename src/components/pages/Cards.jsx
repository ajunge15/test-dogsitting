import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@mui/material";
import Cat from "./../../assets/cats_small.jpg";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    minHeight: 400,
    backgroundColor: "#fff8aa",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 20,
    paddingTop: "55.25%",
    paddingBottom: "25%", // 16:9,
    marginTop: "30",
  },
});

export default function OutlinedCard({
  image,
  name,
  desc,
  // imageWidth,
  // imageHeight,
}) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      style={{ border: "none", boxShadow: "none" }}
      variant="outlined"
    >
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {name}
        </Typography>
        <CardMedia
          className={classes.media}
          alt="images of pets"
          sx={{ height: "500" }}
          width="500"
          alignItems="center"
          image={image}
          // imageWidth={imageWidth}
          // imageHeight={imageHeight}
        />
        <Typography variant="body2" component="p">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
