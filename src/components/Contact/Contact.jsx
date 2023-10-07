import { FaPhoneAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { FaFacebookF, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { BsInstagram, BsGithub, BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
   return (
      <>
         <section className="bg-white">
            <div className="max-w-customContainer mx-auto px-3 py-70">
               <div className="relative mb-12">
                  <h2 className="sectionHeading font-poppins text-[130px] text-headingTextShadow font-bold text-center">CONTACT</h2>
                  <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                     <p className="font-poppins text-4xl text-headingText font-semibold select-none relative after:content-[''] after:absolute after:w-[80px] after:h-[2px] after:bg-themeColor after:left-1/2 after:bottom-[0] after:translate-x-[-50%] after:translate-y-2">Get In Touch</p>
                  </div>
               </div>

               <div className="grid grid-cols-12 gap-10">
                  <div className="col-span-3">
                     <h4 className="font-poppins text-2xl text-contactHead font-medium mb-6">Address</h4>
                     <p className="font-poppins text-lg text-paragraph">Mugda, Dhaka-1214 Bangladesh</p>
                  </div>

                  <div className="col-span-6">
                     <h4 className="font-poppins text-2xl text-contactHead font-medium mb-6">Contact me</h4>
                     <div className="">
                        <a className="font-poppins text-lg text-paragraph flex items-center mb-3" href="tel:+8801567963367">
                           <FaPhoneAlt className="text-themeColor text-2xl mr-1" />
                           +88 01567-963367
                        </a>

                        <a className="font-poppins text-lg text-paragraph flex items-center mb-3" href="tel:+8801902435624">
                           <FaPhoneAlt className="text-themeColor text-2xl mr-1" />
                           +88 01902-435624
                        </a>

                        <a className="font-poppins text-lg text-paragraph flex items-center" href="mailto:sajjadhossainsunny.dev@gmail.com">
                           <MdMail className="text-themeColor text-3xl mr-1" />
                           sajjadhossainsunny.dev@gmail.com
                        </a>
                     </div>
                  </div>

                  <div className="col-span-3">
                     <h4 className="font-poppins text-2xl text-contactHead font-medium mb-6">Find me on</h4>

                     <div className="grid grid-cols-4 gap-5">
                        <div className="col-span-1">
                           <a href='#' className="p-2 inline-block rounded-[5px] text-[26px] text-paragraph cursor-pointer duration-200 hover:bg-[#3b5998] hover:text-white"><FaFacebookF /></a>
                        </div>
                        <div className="col-span-1">
                           <a href='#' className="p-2 inline-block rounded-[5px] text-[26px] text-paragraph cursor-pointer duration-200 hover:bg-[#919191] hover:text-white"><BsGithub /></a>
                        </div>
                        <div className="col-span-1">
                           <a href='#' className="p-2 inline-block rounded-[5px] text-[26px] text-paragraph cursor-pointer duration-200 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white"><BsInstagram /></a>
                        </div>
                        <div className="col-span-1">
                           <a href='#' className="p-2 inline-block rounded-[5px] text-[26px] text-paragraph cursor-pointer duration-200 hover:bg-[#0A66C2] hover:text-white"><FaLinkedinIn /></a>
                        </div>
                        <div className="col-span-1">
                           <a href='#' className="p-2 inline-block rounded-[5px] text-[26px] text-paragraph cursor-pointer duration-200 hover:bg-[#053eff] hover:text-white"><FaBehance /></a>
                        </div>
                        <div className="col-span-1">
                           <a href='#' className="p-2 inline-block rounded-[5px] text-[26px] text-paragraph cursor-pointer duration-200 hover:bg-[#5bf87c] hover:text-white"><BsWhatsapp /></a>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Contact