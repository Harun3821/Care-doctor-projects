import person from '../assets/images/about_us/person.jpg'
import parts from '../assets/images/about_us/parts.jpg'

const About = () => {


    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
         <div className='lg:w-1/2 relative'>
         <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
         <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white" />
         </div>
          <div className="space-y-5 lg:w-1/2 p-4">
            <h3 className="text-5xl font-bold text-[#FF3811]">About Us</h3>
            <h2 className="py-6 text-5xl font-bold">We are qualified<br/> & of experience<br/>in this field</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some<hr/> form, by injected humour, or randomised words which don't<hr/> look even slightly believable.</p>
            <p>the majority have suffered alteration in some form, by injected<hr/> humour, or randomised words which don't look even slightly believable</p>
            <button className="btn bg-[#FF3811] text-white">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;