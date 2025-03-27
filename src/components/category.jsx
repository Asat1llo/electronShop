import React, { useEffect } from 'react'
import cat1 from '../../public/cat1.jpg'
import cat2 from '../../public/cat2.jpg'
import cat3 from '../../public/cat3.jpg'
import cat4 from '../../public/cat4.jpg'
import cat5 from '../../public/cat5.jpg'
import AOS, { init } from 'aos'
import 'aos/dist/aos.css'




const Category = () => {


    const settings ={
      infinite:true,
      speed:500,
      slidesToShow:1,
      sliderToScroll:1,
      arrows:false,
    };
  
    useEffect(()=>{
      AOS,init({
        offset:100,
        durationi:500,
        easing:'ease-in-out',
      });
      AOS.refresh();
  
    },[])
  



  return (
    <div id='category' className='w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex lg:flex-row flex-col justify-center items-center gap-20'>
      <div data-aos='zoom-in' data-aos-delay='50' className='lg:w-[15%] w-full flex flex-col justify-center lg:items-start items-center gap-[20px]'>
        <h1 className='text-themepurple textxl font-semibold text-center'>Favorites items</h1>
          <h1 className='text-black font-semibold text-[42px] leading-[50px] lg:text-start text-center'>Popular category</h1>
          <button className='bg-themepurple hover:bg-themeyellow text-white hover:text-black px-8 py-3 rounded-lg font-semiboldmt mt-[60px]'>View All</button>

        </div>
        <div className='lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-1 justify-center items-start gap-10'>
          <div data-aoa="zoom-in" data-aos-delay='100' className='flex flex-col justify-center items-center gap-6 '>
            <img src={cat1} alt="Erorr" className='rounded-full cursor-pointer '/>
            <h1 className='text-black text-xl font-semibold hover:text-themepurple cursor-pointer'>Portable Speakers</h1>
          </div>
          <div data-aoa="zoom-in" data-aos-delay='200' className='flex flex-col justify-center items-center gap-6 '>
            <img src={cat2} alt="Erorr" className='rounded-full cursor-pointer '/>
            <h1 className='text-black text-xl font-semibold hover:text-themepurple cursor-pointer'>Portable Speakers</h1>
          </div>
          <div data-aoa="zoom-in" data-aos-delay='300' className='flex flex-col justify-center items-center gap-6 '>
            <img src={cat3} alt="Erorr" className='rounded-full cursor-pointer '/>
            <h1 className='text-black text-xl font-semibold hover:text-themepurple cursor-pointer'>Portable Speakers</h1>
          </div>
          <div data-aoa="zoom-in" data-aos-delay='400' className='flex flex-col justify-center items-center gap-6 '>
            <img src={cat4} alt="Erorr" className='rounded-full cursor-pointer '/>
            <h1 className='text-black text-xl font-semibold hover:text-themepurple cursor-pointer'>Portable Speakers</h1>
          </div>
          <div data-aoa="zoom-in" data-aos-delay='500' className='flex flex-col justify-center items-center gap-6 '>
            <img src={cat5} alt="Erorr" className='rounded-full cursor-pointer '/>
            <h1 className='text-black text-xl font-semibold hover:text-themepurple cursor-pointer'>Portable Speakers</h1>
          </div>
        </div>
    </div>
  )
}

export default Category