import React, {useRef} from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaGithubSquare} from 'react-icons/fa'
import ProfilePic from './images/profilepic.jpg'
import ImageOne from './images/design.png'
import ImageTwo from './images/code.png'
import ImageThree from './images/consulting.png'
import DesignOne from './images/web1.png'
import DesignTwo from './images/web2.png'
import DesignThree from './images/web3.png'
import DesignFour from './images/web4.png'
import DesignFive from './images/web5.png'
import DesignSix from './images/web6.png'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import emailjs from '@emailjs/browser';







const Allcomponents = () => {
  const[darkMode, setDarkMode]=useState(false);

  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_el4m20p', 'template_0midorp', form.current, '-S2EjjhiNJ0MFGusO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  


  return (
    // Navbar


    <div className={darkMode? 'dark' :'' }>
      <div className='text-[#000] bg-white px-10  dark:bg-gray-500'>
      <section className=' h-screen '>
        <nav className='py-10 mb-12 flex justify-between max-w-[1240px] mx-auto'>
          <h1 className='text-lg'> Developed by Felix</h1>
          <ul className='flex items-center justify-between'>
            <li>
              <BsFillMoonStarsFill onClick={() =>setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
            </li>
            <li> 
            <Link target='_blank' to='//drive.google.com/file/d/1lSlpEhNYkSLMlSZJfTah1VnAvab1Kci_/view?usp=sharing'><button className='bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-4 py-2 rounded-md ml-8 '> Resume </button>  </Link>
            </li>            
           </ul>
        </nav>
        {/* Hero section */}


        
        <div className='text-center p-10 max-w-[1240px] mx-auto '>
          <h2 className='text-5xl text-teal-500 font-medium '>Onkundi Felix</h2>
          <h3 className='tet-2xl py-2 uppercase'>Software Engineer</h3>
          <p className='text-md py-5 leading-8 text-gray-800'> Onkundi is a software engineer with experience in designing and building of apps for the financial and educational sector. He is proficient in JavaScript Frameworks such as React.js  Node.js and TypeScript. He has also served as the assistant project manager for The Lucrebag Company.   </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 ">
        
        
        <Link target='_blank' to='//www.linkedin.com/in/onkundifelix'>    <FaLinkedin   className=''/>   </Link>
        <Link target='_blank' to='//github.com/Dot-onkundi'>        <FaGithubSquare  className=''/> </Link>
        <Link  target='_blank' to='//www.linkedin.com/in/onkundifelix'>        < FaInstagramSquare className=''/> </Link>
        <Link target='_blank' to='//twitter.com/Onkundi_Felix'>        <FaTwitterSquare  className=''/> </Link>


        </div>
        <div className=''>
          <img src={ProfilePic} alt='none' className='-rotate-[45] rounded-full mx-auto w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96' />
        </div>



        {/* Cards */}

        <section>

        <div className='max-w-[1240px] mx-auto' >
          <h3 className="text-3xl ">Services I offer </h3>
          <p className='text-md py-2 leading-8 text-gray-600'> In my journey as an engineer, I have worked both remotely and onsite for <span className='text-teal-500'> Companies </span> and <span className='text-teal-500'> Startups </span>  and colloborated with teams to deliver webapplications an solutions for both business and consumers.</p>
          <p className='text-md py-2 leading-8 text-gray-600'> My services range from programing to leadership for teams. </p>
        </div>

        <div className="md:flex gap-10 max-w-[1240px] mx-auto">
          <div className="text-center items-center shadow-lg p-10 rounded-xl my-10 ">
          <div className="mx-auto">
          <img src={ImageOne} alt='none' width={100} height={100} className='mx-auto' />
          </div>
          <h3 className='text-lg font-medium pt-8 pb-2'> Beautiful Designs </h3>  
          <p className='py-2'> Creating elegant designs tailored to your needs following core design principles</p> 
          <h4 className='py-4 text-teal-600'> Design tools </h4>

          <p className=' text-gray-800 py-1'> Figma</p>
          <p className=' text-gray-800 py-1'> Illustrator</p>
          <p className=' text-gray-800 py-1'> Adobe</p>
          <p className=' text-gray-800 py-1'> Canva</p>
          </div>
          <div className="text-center items-center shadow-lg p-10 rounded-xl my-10 ">
          <div className="">
          <img src={ImageTwo} alt='none' width={100} height={100} className="mx-auto"/>
          </div>
          <h3 className='text-lg font-medium pt-8 pb-2'> Languages and Frameworks </h3>  
          <p className='py-2'> I have worked with the following languages and  Javascript frameworks</p> 
          <h4 className='py-4 text-teal-600'> Languages </h4>

          <p className=' text-gray-800 py-1'> Python</p>
          <p className=' text-gray-800 py-1'> JavaScript</p>
          <p className=' text-gray-800 py-1'> TypeScript</p>
          <p className=' text-gray-800 py-1'> C++</p>
          </div>
          <div className="text-center items-center shadow-lg p-10 rounded-xl my-10 ">
          <div className="">
          <img src={ImageThree} alt='none' width={100} height={100} className="mx-auto" />
          </div>
          <h3 className='text-lg font-medium pt-8 pb-2'> Leadership Skills </h3>  
          <p className='py-2'> As a leader, I have sharpened and amassed the following skills over time.</p> 
          <h4 className='py-4 text-teal-600'> Leadership </h4>

          <p className=' text-gray-800 py-1'> Agility and adaptability</p>
          <p className=' text-gray-800 py-1'> Decision-making</p>
          <p className=' text-gray-800 py-1'> Innovation and Creativity</p>
          <p className=' text-gray-800 py-1'> Critical Thinking</p>
          </div>
        </div>

      </section>  





    {/* Portfolio section */}

      <div className="max-w-[1240px] mx-auto">
        <h3 className='text-3xl py-1'>Portfolio</h3>
        <p className='text-md py-2 leading-8 text-gray-600'>Having worked for various <span className='text-teal-500'> Companies </span> and <span className='text-teal-500'> Startups </span> here is a sample of my beautiful work</p>
        
      </div> 

      {/* Portfolio images */}
      <div className="max-w-[1240px] mx-auto">
        <div className=" gap-10 justify-between lg:flex lg:flex-row lg:flex-wrap">
          <ul> 
            <div className='py-10'>
            <img src={DesignOne} alt='none' className='rounded-lg object-cover mx-auto'/>          
          </div>
          <div className="py-10">
            <img src={DesignFour} alt='none' className='rounded-lg object-cover mx-auto'/>
          </div>
          <div className="py-10">
            <img src={DesignThree} alt='none' className='rounded-lg object-cover mx-auto'/>
          </div>

          </ul>
          <ul>
            <div className="py-10">
            <img src={DesignTwo} alt='none' className='rounded-lg object-cover mx-auto'/>
          </div>
          <div className="py-10">
             <img src={DesignSix} alt='none' className='rounded-lg object-cover mx-auto'/>
          </div>
          <div className="py-10">
            <img src={DesignFive} alt='none' className='rounded-lg object-cover mx-auto'/>

          </div>

          </ul>



          
        {/* Infosection */}

        </div>
      </div>
      <div className='w-full py-8 px-4 text-white rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600'>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3  ">
            <div className="lg:col-span-2">
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Do you wish to make an inquiry? </h1>
                <p> Let me get in touch </p>
            </div>
            <div className="my-4">
                
                  <form ref={form} onSubmit={sendEmail} className='text-gray-700 flex flex-col  sm:flex-row items-center justify-between w-full'> 
                  <input className=' p-3 w-full rounded-md ' type='email' placeholder='Enter email' name='message'/>
                  <button type="submit" value="Send"  className='bg-white text-gray-700 w-[200px] rounded-md font-medium ml-4 my-6 mx-auto px-6 py-3 hover:text-[#051b61]' > Submit </button>

                  </form>

                  
            </div>

        </div>

    </div>
      <div className='mx-auto text-md py-5 text-center ' >
          <h3 className="text-3xl ">Contact me </h3>
          <p className='text-md py-2 leading-8 text-gray-600'> Hi there? My inbox is open to all. Request for a free open source collaboration and let us discuss a project. </p>
          <p className='text-md py-2 leading-8 text-gray-600'> My services range from programing to leadership for teams. Let us connect! </p>
          <p className='text-md pt-2 leading-8 text-gray-600'> onkundifelix@outlook.com</p>
          <p className='text-md leading-8 text-teal-700'> +254710834128</p>

        </div>
         
      </section>         
    </div>
    </div>
    
  )
}

export default Allcomponents