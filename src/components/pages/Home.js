import Button from "@mui/material/Button";
import HomeImage from "./../../assets/cartoonOfDogs.png";
import "./../../styles.css";
import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import Cards from "./Cards";
import CatPic from "./../../assets/cats_small.jpg";
import { Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Zoe from "./../../assets/zoe.jpg";
import Peyton from "./../../assets/peyton.jpg";
import RemmiBow from "./../../assets/Remmi-Bow.jpg";
import Crazy from "./../../assets/Shitzus.jpg";
import George from "./../../assets/George.jpg";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 500,
    minHeight: 300,
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
  img: {
    height: "50%",
    height: "50%",
    padding: 0,
    margin: 0,
  },
  name: {
    fontSize: "30px",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className="width">
      <div className="color-code">
        <img alt="hi" src={HomeImage} class="home-img"></img>
      </div>
      <div className="color-block2">
        <h2 style={{ textAlign: "center" }}>Meet my friends!</h2>
        <Grid container spacing={4} height={400}>
          <Grid item xs={12} sm={6} md={4}>
            <Cards
              image={George}
              name="George the Corgi"
              desc="A snuggly corgi"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards image={Zoe} name="Zoe the Pitbull" desc="A loving pitbull" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards
              image={Peyton}
              name="Peyton the golden retriever"
              desc="A tug of war champion"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards
              image={RemmiBow}
              name="Remmi and Bowski"
              desc="The old chihuahuas"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards
              image={Crazy}
              name="Crazy Shih Tzus"
              desc="The crazy puppies"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards
              image={CatPic}
              name="Mabel and Dipper"
              desc="Cute black cats"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

// export function Cats() {
//   return (
//     <Card sx={{ maxWidth: 500 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="350"
//           // width="100"
//           image={CatPic}
//           alt="mabel and dipper"
//           marginLeft="200"
//           borderColor="red"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             The Siblings - Mabel and Dipper
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             These black cats are cuddly and friendly cats ready to eat their wet
//             breakfast in the morning!
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }

// export function Zoe() {
//   return (
//     <Card sx={{ maxWidth: 500 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="350"
//           // width="100"
//           image={CatPic}
//           alt="zoe"
//           marginLeft=""
//           borderColor="red"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             The Siblings - Mabel and Dipper
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             These two are cuddly and friendly cats ready to eat their breakfast
//             in the morning!
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }

export function CurrentDogs() {
  return <div className="">testing</div>;
}
export function ButtonUsage() {
  return <Button variant="contained">Hello world</Button>;
}
