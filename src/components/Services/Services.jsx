import { AiOutlineDesktop, AiOutlineMobile } from 'react-icons/ai';
import { PiDevToLogoFill } from 'react-icons/pi';

const Services = () => {
   return (
      <>
         <section className="bg-[#F8F9FA]">
            <div className="max-w-customContainer mx-auto px-3 py-70">
               <div className="relative mb-12">
                  <h2 className="sectionHeading font-poppins text-[130px] text-headingTextShadow font-bold text-center">SERVICES</h2>
                  <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                     <p className="font-poppins text-4xl text-headingText font-semibold select-none relative after:content-[''] after:absolute after:w-[80px] after:h-[2px] after:bg-themeColor after:left-1/2 after:bottom-[0] after:translate-x-[-50%] after:translate-y-2">What I Do?</p>
                  </div>
               </div>
               <div className="grid grid-cols-12 gap-y-[50px]">
                  <div className="col-span-6 grid grid-cols-6 gap-5">
                     <div className="col-span-1">
                        <div className="text-[35px] p-5 text-themeColor rounded-[5px] shadow-iconShadow">
                           <AiOutlineDesktop />
                        </div>
                     </div>
                     <div className="col-span-4 h-full">
                        <div className="">
                           <h4 className="font-poppins text-[22px] text-contactHead font-medium mb-2.5">Web Design</h4>
                           <p className="font-poppins text-base text-paragraph leading-[28px]">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                        </div>
                     </div>
                     <div className="col-span-1 h-full"></div>
                  </div>
                  <div className="col-span-6 grid grid-cols-6 gap-5">
                     <div className="col-span-1">
                        <div className="text-[35px] p-5 text-themeColor rounded-[5px] shadow-iconShadow">
                           <PiDevToLogoFill />
                        </div>
                     </div>
                     <div className="col-span-4 h-full">
                        <div className="">
                           <h4 className="font-poppins text-[22px] text-contactHead font-medium mb-2.5">Web Development</h4>
                           <p className="font-poppins text-base text-paragraph leading-[28px]">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                        </div>
                     </div>
                     <div className="col-span-1 h-full"></div>
                  </div>
                  <div className="col-span-6 grid grid-cols-6 gap-5">
                     <div className="col-span-1">
                        <div className="text-[35px] p-5 text-themeColor rounded-[5px] shadow-iconShadow">
                           <AiOutlineMobile />
                        </div>
                     </div>
                     <div className="col-span-4 h-full">
                        <div className="">
                           <h4 className="font-poppins text-[22px] text-contactHead font-medium mb-2.5">App Development</h4>
                           <p className="font-poppins text-base text-paragraph leading-[28px]">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                        </div>
                     </div>
                     <div className="col-span-1 h-full"></div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Services