import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'
import { Link } from 'react-router-dom'
import { FaCaretDown, FaPlay, FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { TbInfoCircle } from 'react-icons/tb';
import SliderBasic from './SliderBasic'
import ModalMovieInfo from './ModalMovieInfo';
import { movies, topTV } from './data';
import Footer2 from '../../partials/Footer2';
import SliderTop from './SliderTop';
import ModalSearc from './ModalSearc';


const Movies = () => {

    const [showMovieInfo, setMovieInfo] = React.useState(false)

    const [movieData, setMovieData] = React.useState([])
    const [search, setSearch] = React.useState(false)

    
    const handleShowSearch = () => setSearch(true)

  return (
    <>
    <div className='bg-[#141414] text-white'>
    <div className={`banner bg-[url('../../img/movie/banner-movies.jpg')] bg-cover h-[100vh] relative isolate`}>
       
       <div className="backdrop bg-black/30 absolute top-0 legft-0 h-full w-full -z-10"></div>
        <div className="header py-4 px-2 bg-gradient-to-b from-[rgba(0,0,0.5)] to from-[rgba(0,0,0.2)]">
           <div className="flex justify-between items-center">
            <div className='flex items-center gap-10'>
                <img src={`${baseImgUrl}/logo.png`} alt="" className='w-[148px] h-[40px] object-cover'/>
    
                    <ul className='flex items-center gap-5 text-white'>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="">Tv Shows</Link></li>
                        <li><Link to="">Movies</Link></li>
                        <li><Link to="">New & Popular</Link></li>
                        <li><Link to="">My List</Link></li>
                        <li><Link to="">Browse by Languages</Link></li>
                </ul>
            </div>
            <div>
                <ul className='flex items-center gap-5'>
                    <li><button onClick={handleShowSearch}><FaSearch className='text-xl'/></button></li>
                    <li><button><FaRegBell className='text-xl'/></button></li>
                    <li className='flex items-center gap-3'>
                        <button><img src="https://via.placeholder.com/50x50" alt="" className='rounded-md'/></button>
                        <FaCaretDown />
                    </li>
                </ul>
            </div>
           </div>
        </div>

        <div className="absolute left-[10vh] bottom-[30vh] text-white">
            <h1 className='text-[70px] font-bold'>Genshin Impact</h1>
            <ul className='flex gap-5'>
                <li><button className='px-6 py-1.5 rounded-md bg-white text-stone-800 font-bold flex items-center gap-2'><FaPlay />Trailer</button></li>
                <li><button className='px-6 py-1.5 rounded-md bg-stone-700 text-white border-stone-600 flex items-center gap-2'><TbInfoCircle />More Info</button></li>
            </ul>
        </div>
    </div>
        <div className='slider-wrapper px-10 py-20 overflow-hidden'>
        <SliderBasic setMovieInfo={setMovieInfo} movies={movies} setMovieData={setMovieData} grouping="trending" sliderHeader="Trending Movies"/>
        <SliderBasic setMovieInfo={setMovieInfo} movies={movies} setMovieData={setMovieData} grouping="asian" sliderHeader="Asian Movies"/>

        <SliderTop setMovieInfo={setMovieInfo} topTV={topTV} setMovieData={setMovieData} grouping="trending" sliderHeader="Top 10 TV Shows in the Philippines"/>

        </div>
        </div>
        <Footer2 />
        
       {showMovieInfo && <ModalMovieInfo setMovieInfo={setMovieInfo} movieData={movieData}/>}
       {search && <ModalSearc setSearch={setSearch}/>}
    </>
  )
}

export default Movies
