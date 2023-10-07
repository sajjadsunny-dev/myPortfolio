
const AboutMe = () => {
   return (
      <>
         <section className="bg-white">
            <div className="max-w-customContainer mx-auto px-3 py-70">
               <div className="relative mb-12">
                  <h2 className="sectionHeading font-poppins text-[130px] text-headingTextShadow font-bold text-center">ABOUT ME</h2>
                  <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                     <p className="font-poppins text-4xl text-headingText font-semibold select-none relative after:content-[''] after:absolute after:w-[80px] after:h-[2px] after:bg-themeColor after:left-1/2 after:bottom-[0] after:translate-x-[-50%] after:translate-y-2">Know me more</p>
                  </div>
               </div>
               <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-8">
                     <h5 className="font-poppins text-[28px] font-semibold leading-[33px] text-contactHead">I'm <span className="text-themeColor">Sajjad Hossain Sunny,</span> a Web Developer</h5>
                     <p className="my-4 font-poppins text-base leading-[25px] text-paragraph text-justify">I've completed Diploma in Engineering. I have Good experience in Web design. And i am practicing on development as well. Delivering work within time and budget which meets client’s requirements is my moto.</p>
                     <p className="font-poppins text-base leading-[25px] text-paragraph text-justify">I help you build brand for your business at an affordable price. I provide html css bootstrap related services.The codes are hand coded and w3c validated. Each site i develop is using latest development principles and techniques.</p>
                  </div>
                  <div className="col-span-4">
                     <h6 className="font-poppins text-base font-semibold leading-[24px] text-[#4C4D4D] py-3 border-b-[1px] border-solid border-[#EAEAEA]">Name <span className="ml-1">:</span> <span className="text-paragraph font-normal">Sajjad Hossain Sunny</span></h6>
                     <h6 className="font-poppins text-base font-semibold leading-[24px] text-[#4C4D4D] py-3 border-b-[1px] border-solid border-[#EAEAEA]">Email <span className="ml-2">:</span> <a className="text-themeColor font-normal" href="mailto:sajjadhossainsunny.dev@gmail.com">sajjadhossainsunny.dev@gmail.com</a></h6>
                     <h6 className="font-poppins text-base font-semibold leading-[24px] text-[#4C4D4D] py-3 border-b-[1px] border-solid border-[#EAEAEA]">Age <span className="ml-5">:</span> <span className="text-paragraph font-normal">26</span></h6>
                     <h6 className="font-poppins text-base font-semibold leading-[24px] text-[#4C4D4D] py-3">From <span className="ml-2.5">:</span> <span className="text-paragraph font-normal">Dhaka, Bangladesh</span></h6>
                     <button className="mt-7 px-40 py-3 font-poppins text-base font-medium text-white bg-themeColor rounded-customRadius shadow-btnShadow duration-200 hover:bg-[#00A1C1]">Download CV</button>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default AboutMe