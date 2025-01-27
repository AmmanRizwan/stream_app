import React, { useContext } from "react";
// Component
import PlayBack from "../components/PlayBack";
import NewsLetter from "../components/NewsLetter";
import DefaultCard from "../components/DefaultCard";
import Reasons from "../components/Reasons";
import Accordian from "../components/Accordian";
import MemberShip from "../components/MemberShip";
import { MovieContext } from "../context/MovieContext";


const SignUpPage = () => {
  const { movieData } = useContext(MovieContext);
  return (
    <>
      <PlayBack />
      <NewsLetter />
      <DefaultCard title={"Trending Now"} content={"Trending"} movieData={movieData} />
      <DefaultCard title={"Only On IAStream"} content={"Only IAStream"} movieData={movieData} />
      <Reasons />
      <Accordian />
      <MemberShip />
    </>
  )
}

export default SignUpPage;