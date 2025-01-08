import "./../../styles.css";
import * as React from "react";
// import { Carousel } from "./Carousel";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
import Carousel from "./Carousel";
import "./../../styles.css";

export default function AboutMe({ slides }) {
  return (
    <>
      <br></br>
      <h1>Amelia Junge</h1>
      <br></br>
      <p>
        <h3>Hi there! In case you don't already know me...</h3> <br></br>I have
        always had a love for animals ever since I was a girl.<br></br> I almost
        decided to be a vet until I stumbled on software development in college.{" "}
        <br></br>I like to spend most of my time outdoors or playing games. My
        hobbies include:
        <br></br>
        <br></br>
        <ul style={{ textAlign: "center" }}>
          <li>Hiking</li>
          <li>Indoor/outdoor soccer</li>
          <li>PS5</li>
          <li>Yoga</li>
          <li>Biking</li>
          <li>Skiing</li>
          <li>Baking</li>
          <li>Reading/Audiobooks</li>
        </ul>
      </p>
      <div className="AboutMe">
        <br></br>
        <br></br>
        <br></br>
        <h3 style={{ textAlign: "center" }}>Here's a couple pictures of me!</h3>
        <Carousel data={slides} />
      </div>
    </>
  );
}

// function srcset(image, size, rows = 1, cols = 1) {
//   return {
//     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${size * cols}&h=${
//       size * rows
//     }&fit=crop&auto=format&dpr=2 2x`,
//   };
// }

// export default function QuiltedImageList() {
//   return (
//     <ImageList
//       sx={{ width: 800, height: 750 }}
//       variant="quilted"
//       cols={4}
//       rowHeight={121}
//     >
//       {itemData.map((item) => (
//         <ImageListItem
//           key={item.img}
//           cols={item.cols || 1}
//           rows={item.rows || 1}
//         >
//           <img
//             {...srcset(item.img, 121, item.rows, item.cols)}
//             alt={item.title}
//             loading="lazy"
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }

// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//     title: "Breakfast",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//     title: "Burger",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//     title: "Camera",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//     title: "Coffee",
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//     title: "Hats",
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//     title: "Basketball",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
//     title: "Fern",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
//     title: "Mushrooms",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//     title: "Tomato basil",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
//     title: "Sea star",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//     title: "Bike",
//     cols: 2,
//   },
// ];
