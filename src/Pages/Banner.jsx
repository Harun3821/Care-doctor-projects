import img1 from '../assets/images/banner/1.jpg'
import img2 from '../assets/images/banner/2.jpg'
import img3 from '../assets/images/banner/3.jpg'
import img4 from '../assets/images/banner/4.jpg'
import img5 from '../assets/images/banner/5.jpg'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const Banner = () => {


    return (
        <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute h-full  rounded-xl  left-0  top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] items-center flex">
      
           <div className='text-white space-y-4 w-1/2 pl-12'>
                <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                <p className='text-[#c9c9c9]'>There are many variations of passages of  available, but
                <hr /> the majority have suffered alteration in some form</p>
            <div className='flex'>
            <button className='btn-secondar btn border-none bg-[#FF3811] text-white mr-5'>Discover More</button>
            <button className='btn-secondar btn btn-outline text-white'>Discover More</button>
            </div>
            </div>
             
          </div>
          <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0' >
              <a href="#slide4" className="btn btn-circle mr-5"><GoArrowLeft/></a> 
             <a href="#slide2" className="btn btn-circle"><GoArrowRight/></a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute h-full  rounded-xl  left-0  top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] items-center flex">
      
           <div className='text-white space-y-4 w-1/2 pl-12'>
                <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                <p className='text-[#c9c9c9]'>There are many variations of passages of  available, but
                <hr /> the majority have suffered alteration in some form</p>
            <div className='flex'>
            <button className='btn-secondar btn border-none bg-[#FF3811] text-white mr-5'>Discover More</button>
            <button className='btn-secondar btn btn-outline text-white'>Discover More</button>
            </div>
            </div>
             
          </div>
          <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0' >
              <a href="#slide4" className="btn btn-circle mr-5"><GoArrowLeft/></a> 
             <a href="#slide2" className="btn btn-circle"><GoArrowRight/></a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute h-full  rounded-xl  left-0  top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] items-center flex">
      
           <div className='text-white space-y-4 w-1/2 pl-12'>
                <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                <p className='text-[#c9c9c9]'>There are many variations of passages of  available, but
                <hr /> the majority have suffered alteration in some form</p>
            <div className='flex'>
            <button className='btn-secondar btn border-none bg-[#FF3811] text-white mr-5'>Discover More</button>
            <button className='btn-secondar btn btn-outline text-white'>Discover More</button>
            </div>
            </div>
             
          </div>
          <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0' >
              <a href="#slide2" className="btn btn-circle mr-5"><GoArrowLeft/></a> 
             <a href="#slide3" className="btn btn-circle"><GoArrowRight/></a>
            </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl" />
          <div className="absolute h-full  rounded-xl  left-0  top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] items-center flex">
      
           <div className='text-white space-y-4 w-1/2 pl-12'>
                <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                <p className='text-[#c9c9c9]'>There are many variations of passages of  available, but
                <hr /> the majority have suffered alteration in some form</p>
            <div className='flex'>
            <button className='btn-secondar btn border-none bg-[#FF3811] text-white mr-5'>Discover More</button>
            <button className='btn-secondar btn btn-outline text-white'>Discover More</button>
            </div>
            </div>
             
          </div>
          <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0' >
              <a href="#slide1" className="btn btn-circle mr-5"><GoArrowLeft/></a> 
             <a href="#slide3" className="btn btn-circle"><GoArrowRight/></a>
            </div>
        </div> 
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full rounded-xl" />
          <div className="absolute h-full  rounded-xl  left-0  top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] items-center flex">
      
           <div className='text-white space-y-4 w-1/2 pl-12'>
                <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                <p className='text-[#c9c9c9]'>There are many variations of passages of  available, but
                <hr /> the majority have suffered alteration in some form</p>
            <div className='flex'>
            <button className='btn-secondar btn border-none bg-[#FF3811] text-white mr-5'>Discover More</button>
            <button className='btn-secondar btn btn-outline text-white'>Discover More</button>
            </div>
            </div>
             
          </div>
          <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0' >
              <a href="#slide1" className="btn btn-circle mr-5"><GoArrowLeft/></a> 
             <a href="#slide4" className="btn btn-circle"><GoArrowRight/></a>
            </div>
        </div> 
       </div>
    );
};

export default Banner;