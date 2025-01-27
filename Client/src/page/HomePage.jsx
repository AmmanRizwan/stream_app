import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import prev from '../assets/data/movie_image/preview/preview_03.webp';

const Home = () => {

  return (
    <div>
      <Hero />
      <Content title={"New Release"} imageData={prev}  />
      <Content title={"Recently Added"} imageData={prev}  />
      <Content title={"Only On IAStream"} imageData={prev}  />
      <Content title={"Movies"} imageData={prev}  />
      <Content title={"Dramas"} imageData={prev}  />
      <Content title={"Actions"} imageData={prev}  />
    </div>
  )
}

export default Home;