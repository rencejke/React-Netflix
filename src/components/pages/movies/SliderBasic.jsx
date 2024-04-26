import React from 'react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import Slider from "react-slick";
import { baseImgUrl } from '../../helpers/functions-general';




function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
      <div
      className={className}
      // style={{ ...style, display: "flex", background: "green"}}
      onClick={onClick}>
      <PiCaretRightBold />
  </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <div
          className={className}
          // style={{ ...style, display: "flex", background: "green"}}
          onClick={onClick}>
          <PiCaretLeftBold />
      </div>
  );
}

const SliderBasic = ({setMovieInfo, setMovieData, movies, sliderHeader, grouping}) => {

  const handleShowMovieInfo = (movie) => {
    setMovieInfo(true);
    setMovieData(movie);
  }

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    nextArrow:  <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const getGroupings = movies.filter((movie) => movie.grouping === grouping)
  return (
    <>
    
    <div>
    <div className="relative" >
    <h3 className='text-3xl font-bold mb-5'>{sliderHeader}</h3>
    <Slider {...settings}>
      {getGroupings.map((movie, key) =>(
      <div key={key}>
        <button className='relative' onClick={()=>handleShowMovieInfo(movie)}>
        <img src={`${baseImgUrl}/movie/${movie.image}`} alt="" className='w-[320px] h-[200px]'/>
          <span className='px-2 py-1  rounded-tl-md rounded-tr-md absolute bottom-0 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[12px]'>Recently Added</span>
        </button>
      </div>
))}
     
    </Slider>
    </div>
    </div>
    </>
  );
  }

export default SliderBasic