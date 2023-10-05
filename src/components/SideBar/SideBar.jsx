import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram, BsGithub, BsWhatsapp } from 'react-icons/bs';

const sideBar = () => {
   return (
      <>
         <section>
            <div className="h-screen w-[18%] bg-sideBarBg pt-10 pb-8 flex flex-col justify-between">
               <div className="">
                  <div className="">
                     <img className="border-solid border-8 border-profileBorder rounded-full mx-auto" src="images/profile.png" alt="profile.png" />
                  </div>
                  <h3 className="font-syne text-xl font-bold text-white tracking-wider text-center mt-6">Sajjad Hossain Sunny</h3>
               </div>

               <ul className=" flex flex-col items-center mb-28">
                  <li className="mb-5"><a className="font-poppins text-lg text-themeColor" href="#">Home</a></li>
                  <li className="mb-5"><a className="font-poppins text-lg text-white hover:text-themeColor duration-200" href="#">About Me</a></li>
                  <li className="mb-5"><a className="font-poppins text-lg text-white hover:text-themeColor duration-200" href="#">What I do</a></li>
                  <li className="mb-5"><a className="font-poppins text-lg text-white hover:text-themeColor duration-200" href="#">Resume</a></li>
                  <li className="mb-5"><a className="font-poppins text-lg text-white hover:text-themeColor duration-200" href="#">Portfolio</a></li>
                  <li className=""><a className="font-poppins text-lg text-white hover:text-themeColor duration-200" href="#">Contact Me</a></li>
               </ul>

               <div className="px-12 flex justify-between">
                  <div className="p-2 rounded-[5px] text-lg text-white cursor-pointer duration-200 hover:bg-[#3b5998]"><FaFacebookF /></div>
                  <div className="p-2 rounded-[5px] text-lg text-white cursor-pointer duration-200 hover:bg-[#0A66C2]"><FaLinkedinIn /></div>
                  <div className="p-2 rounded-[5px] text-lg text-white cursor-pointer duration-1000 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"><BsInstagram /></div>
                  <div className="p-2 rounded-[5px] text-lg text-white cursor-pointer duration-200 hover:bg-[#919191]"><BsGithub /></div>
                  <div className="p-2 rounded-[5px] text-lg text-white cursor-pointer duration-200 hover:bg-[#5bf87c]"><BsWhatsapp /></div>
               </div>
            </div>
         </section>
      </>
   )
}

export default sideBar