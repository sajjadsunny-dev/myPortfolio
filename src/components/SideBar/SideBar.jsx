import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram, BsGithub, BsWhatsapp } from 'react-icons/bs';

const sideBar = () => {
   return (
      <>
         <header className='hidden md:block'>
            <nav className="fixed h-screen md:landscape:w-[265px] xl:landscape:w-[300px] bg-sideBarBg md:landscape:pt-5 xl:landscape:pt-8 md:landscape:pb-3.5 xl:landscape:pb-6 flex flex-col justify-between z-50">
               <div className="">
                  <div href="#">
                     <span className="">
                        <img className="border-solid border-8 border-profileBorder rounded-full mx-auto" src="images/profile.png" alt="profile.png" />
                     </span>
                     <h3 className="font-syne text-xl font-bold text-white text-center mt-4">Sajjad Hossain Sunny</h3>
                  </div>
               </div>

               <ul className=" flex flex-col items-center mb-20">
                  <li className="mb-5 md:landscape:mb-3.5 xl:landscape:mb-5"><a className="font-poppins text-lg text-themeColor" href="#">Home</a></li>
                  <li className="mb-5 md:landscape:mb-3.5 xl:landscape:mb-5"><a className="font-poppins text-lg text-[#FFFFFFE5] hover:text-themeColor duration-200" href="#">About Me</a></li>
                  <li className="mb-5 md:landscape:mb-3.5 xl:landscape:mb-5"><a className="font-poppins text-lg text-[#FFFFFFE5] hover:text-themeColor duration-200" href="#">What I do</a></li>
                  <li className="mb-5 md:landscape:mb-3.5 xl:landscape:mb-5"><a className="font-poppins text-lg text-[#FFFFFFE5] hover:text-themeColor duration-200" href="#">Resume</a></li>
                  <li className="mb-5 md:landscape:mb-3.5 xl:landscape:mb-5"><a className="font-poppins text-lg text-[#FFFFFFE5] hover:text-themeColor duration-200" href="#">Portfolio</a></li>
                  <li className=""><a className="font-poppins text-lg text-[#FFFFFFE5] hover:text-themeColor duration-200" href="#">Contact Me</a></li>
               </ul>

               <div className="px-12 md:landscape:px-6 xl:landscape:px-12 flex justify-between">
                  <div className="p-2 rounded-[5px] text-lg text-white cursor-pointer duration-200 hover:bg-[#3b5998]"><FaFacebookF /></div>
                  <div className="p-2 rounded-[5px] text-lg text-white cursor-pointer duration-200 hover:bg-[#0A66C2]"><FaLinkedinIn /></div>
                  <div className="p-2 rounded-[5px] text-lg text-white cursor-pointer duration-1000 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"><BsInstagram /></div>
                  <div className="p-2 rounded-[5px] text-lg text-white cursor-pointer duration-200 hover:bg-[#919191]"><BsGithub /></div>
                  <div className="p-2 rounded-[5px] text-lg text-white cursor-pointer duration-200 hover:bg-[#5bf87c]"><BsWhatsapp /></div>
               </div>
            </nav>
         </header>
      </>
   )
}

export default sideBar