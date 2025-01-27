import React, { useContext } from "react";
import PopUp from "./PopUp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MovieContext } from "../context/MovieContext";

const DefaultCard = ({title, content, movieData}) => {

  const {settings, CardPopUp, Id, setId, handlePopUp, CloseBtn} = useContext(MovieContext);
  
  return (
    <div>

      <div className="w-5/6 m-auto py-6 transition-all duration-500">
      <h1 className="text-lg font-bold mb-4 lg:text-4xl">{title}</h1>
      <Slider {...settings}>
        {
          movieData.map((data, i) => {
            if (data.content == content)
            {
              return (
                <>
                    <img className="card-size" onClick={() => {setId(data.id); handlePopUp();} } key={i} src={data.image} alt={data.title} />
                </>
              )
            }
          })  
        }
        </Slider>
      </div>
      <div>
        {
          movieData.map((data, i) =>{
            if (data.content == content && Id == data.id) {
              return (
                  CardPopUp && <PopUp key={i} iconSrc={data.icon} serial={data.id} bgSrc={data.bg} name={data.title} description={data.description} category={data.category} type={data.type} mature={data.mature} year={data.year}  OnClose={CloseBtn} />
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default DefaultCard;