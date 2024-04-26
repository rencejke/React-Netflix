import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general';
import Slider from 'react-slick';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

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

    const SliderTop = ({setMovieInfo, setMovieData, topTV, sliderHeader, grouping}) => {

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
      
        const getGroupings = topTV.filter((movie) => movie.grouping === grouping)
        return (
          <>
          
          <div>
          <div className="relative" >
          <h3 className='text-2xl font-bold mb-5 mt-5'>{sliderHeader}</h3>
          <Slider {...settings}>
            {getGroupings.map((movie, key) =>(
            <div key={key}>
              <button className='relative' onClick={()=>handleShowMovieInfo(movie)}>
              
              <div className='flex'>
              <img src={`${baseImgUrl}/top-numbers/${movie.number}`} alt="" className='w-full h-[200px] absolute right-[70%] z-[-1] object-cover'/>
              <img src={`${baseImgUrl}/top-top10/${movie.image}`} alt="" className='w-full h-[200px] object-cover'/>
              </div>
                {/* <span className='px-2 py-1  rounded-tl-md rounded-tr-md absolute bottom-0 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[8px]'>Recently Added</span> */}
              </button>
            </div>
      ))}
           
          </Slider>
          </div>
          </div>
          </>
        );
        }

export default SliderTop