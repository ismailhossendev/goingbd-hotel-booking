import React, { useContext } from "react";
import Slider from "react-slick";
import { apiContext } from "../Context/ApiContext";
import HomePalaceCard from "./HomePalaceCard";


const SwipeToSlide = () => {
  const {palace} = useContext(apiContext) 
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="absolute -bottom-14 left-72">
              <p className="btn btn-circle">❯</p>
          </div>
      );
    }
    
    function SamplePrevArrow(props) {
      const {onClick } = props;
      return (
        <div className="absolute  -bottom-14 left-56">
          <p className="btn btn-circle" onClick={onClick}>❮</p>
          
        </div>
      );
    }
    
    
    
    
    const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        {
          palace.map(p => <HomePalaceCard p={p} key={p.id} ></HomePalaceCard>)
        }
      </Slider>
    </div>
  );
};





export default SwipeToSlide;