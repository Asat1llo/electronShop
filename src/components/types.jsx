import React, { useEffect } from 'react'
import banne1 from '../../public/banner1.jpg'
import banne2 from '../../public/banner2.jpg'
import banne3 from '../../public/banner3.jpg'
import AOS, { init } from 'aos'
import 'aos/dist/aos.css'





const Types = () => {


     useEffect(()=>{
        AOS,init({
          offset:100,
          durationi:500,
          easing:'ease-in-out',
        });
        AOS.refresh();
    
      },[])


  return (
    <div className='w-full lg:px-20 px-5 py-[80px] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10'>
      <div data-os='zoom-in' data-aos-delay='100'  className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg ' style={{backgroundImage:`url(${banne1})`}}>
        <h1 className='text-themeyellow border rounded-lg border-themeyellow py-2 text-lg'>60% Off</h1>
      <h1 className='text-4xl text-end text-white font-semibold '>Wrellos <br /> Devices</h1>
      <button className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold '>SHOP NOW</button>
      </div>

      <div data-os='zoom-in' data-aos-delay='100'  className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg ' style={{backgroundImage:`url(${banne2})`}}>
        <h1 className='text-themeyellow border rounded-lg border-themeyellow py-2 text-lg'>60% Off</h1>
      <h1 className='text-4xl text-end text-white font-semibold '>Wrellos <br /> Devices</h1>
      <button className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold '>SHOP NOW</button>
      </div>

      <div data-os='zoom-in' data-aos-delay='100'  className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg ' style={{backgroundImage:`url(${banne3})`}}>
        <h1 className='text-themeyellow border rounded-lg border-themeyellow py-2 text-lg'>60% Off</h1>
      <h1 className='text-4xl text-end text-white font-semibold '>Wrellos <br /> Devices</h1>
      <button className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold '>SHOP NOW</button>
      </div>


    </div>
  )
}

export default Types