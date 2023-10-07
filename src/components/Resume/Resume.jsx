import { FaDownload } from 'react-icons/fa';

const Services = () => {
   return (
      <>
         <section className="bg-white">
            <div className="max-w-customContainer mx-auto px-3 py-70">
               <div className="relative mb-12">
                  <h2 className="sectionHeading font-poppins text-[130px] text-headingTextShadow font-bold text-center">SUMMARY</h2>
                  <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                     <p className="font-poppins text-4xl text-headingText font-semibold select-none relative after:content-[''] after:absolute after:w-[80px] after:h-[2px] after:bg-themeColor after:left-1/2 after:bottom-[0] after:translate-x-[-50%] after:translate-y-2">Resume</p>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-10">
                  <div className="col-span-1">
                     <h4 className="font-poppins text-2xl text-contactHead font-semibold mb-6">My Education</h4>

                     <div className="shadow-resumeShadow p-6 mb-6 rounded-[5px]">
                        <h5 className="font-poppins text-sm text-white leading-[14px] px-[13px] py-[5px] bg-themeColor rounded-[5px] inline-block mb-5">2023 - 2024</h5>
                        <h4 className="font-poppins text-[25px] text-contactHead font-semibold">MERN Stack Development</h4>
                        <h3 className="font-poppins text-lg text-[#E3356F] my-1.5">Creative IT institute</h3>
                        <p className="font-poppins text-[22px] text-contactHead font-medium">Make Full Stack Web Applications</p>
                     </div>

                     <div className="shadow-resumeShadow p-6 mb-6 rounded-[5px]">
                        <h5 className="font-poppins text-sm text-white leading-[14px] px-[13px] py-[5px] bg-themeColor rounded-[5px] inline-block mb-5">2022 - 2022</h5>
                        <h4 className="font-poppins text-[25px] text-contactHead font-semibold">Professional Web Design Couse</h4>
                        <h3 className="font-poppins text-lg text-[#E3356F] my-1.5">Creative IT institute</h3>
                        <p className="font-poppins text-[22px] text-contactHead font-medium">Web Design</p>
                     </div>

                     <div className="shadow-resumeShadow p-6 mb-6 rounded-[5px]">
                        <h5 className="font-poppins text-sm text-white leading-[14px] px-[13px] py-[5px] bg-themeColor rounded-[5px] inline-block mb-5">2018 - 2023</h5>
                        <h4 className="font-poppins text-[25px] text-contactHead font-semibold">Diploma Engineering</h4>
                        <h3 className="font-poppins text-lg text-[#E3356F] my-1.5">Anjuman Mokhlesur Rahman Polytechnic Institute</h3>
                        <p className="font-poppins text-[22px] text-contactHead font-medium">Computer Technology</p>
                     </div>
                  </div>

                  <div className="col-span-1">
                     <h4 className="font-poppins text-2xl text-contactHead font-semibold mb-6">My Experience</h4>

                     <div className="shadow-resumeShadow p-6 mb-6 rounded-[5px]">
                        <h5 className="font-poppins text-sm text-white leading-[14px] px-[13px] py-[5px] bg-themeColor rounded-[5px] inline-block mb-4">2022 - 2023</h5>
                        <h4 className="font-poppins text-[25px] text-contactHead font-medium">Intern Web Designer</h4>
                        <h3 className="font-poppins text-lg text-[#E3356F]">Creative IT institute</h3>
                        <p className="font-poppins text-base text-paragraph">Web designer Internship. working on project of creative it. and learn new creative way of design.</p>
                     </div>

                     <div className="shadow-resumeShadow p-6 mb-6 rounded-[5px]">
                        <h5 className="font-poppins text-sm text-white leading-[14px] px-[13px] py-[5px] bg-themeColor rounded-[5px] inline-block mb-4">2017 - 2018</h5>
                        <h4 className="font-poppins text-[25px] text-contactHead font-medium">Computer Operator</h4>
                        <h3 className="font-poppins text-lg text-[#E3356F]">Habib Printers</h3>
                        <p className="font-poppins text-base text-paragraph">Graphics design works in adobe illustraor and photoshop.
                           manage account related works.</p>
                     </div>
                  </div>
               </div>

               <div className="mt-12">
                  <h4 className="font-poppins text-2xl text-contactHead font-semibold mb-6">My Skills</h4>
                  <div className="grid grid-cols-2 gap-6">

                     <div className="col-span-1">
                        <div className="">
                           <div className="flex justify-between mb-2">
                              <h6 className="font-poppins text-base text-contactHead font-medium">Web Design</h6>
                              <h6 className="font-poppins text-base text-contactHead font-medium"><span>85</span>%</h6>
                           </div>
                           <div className="relative w-full h-2 bg-[#E9ECEF] rounded-md overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-[85%] before:bg-themeColor"></div>
                        </div>
                     </div>

                     <div className="col-span-1">
                        <div className="">
                           <div className="flex justify-between mb-2">
                              <h6 className="font-poppins text-base text-contactHead font-medium">HTML/CSS</h6>
                              <h6 className="font-poppins text-base text-contactHead font-medium"><span>90</span>%</h6>
                           </div>
                           <div className="relative w-full h-2 bg-[#E9ECEF] rounded-md overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-[90%] before:bg-themeColor"></div>
                        </div>
                     </div>

                     <div className="col-span-1">
                        <div className="">
                           <div className="flex justify-between mb-2">
                              <h6 className="font-poppins text-base text-contactHead font-medium">Bootstrap CSS</h6>
                              <h6 className="font-poppins text-base text-contactHead font-medium"><span>80</span>%</h6>
                           </div>
                           <div className="relative w-full h-2 bg-[#E9ECEF] rounded-md overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-[80%] before:bg-themeColor"></div>
                        </div>
                     </div>

                     <div className="col-span-1">
                        <div className="">
                           <div className="flex justify-between mb-2">
                              <h6 className="font-poppins text-base text-contactHead font-medium">Tailwind CSS</h6>
                              <h6 className="font-poppins text-base text-contactHead font-medium"><span>90</span>%</h6>
                           </div>
                           <div className="relative w-full h-2 bg-[#E9ECEF] rounded-md overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-[90%] before:bg-themeColor"></div>
                        </div>
                     </div>

                     <div className="col-span-1">
                        <div className="">
                           <div className="flex justify-between mb-2">
                              <h6 className="font-poppins text-base text-contactHead font-medium">JavaScript</h6>
                              <h6 className="font-poppins text-base text-contactHead font-medium"><span>30</span>%</h6>
                           </div>
                           <div className="relative w-full h-2 bg-[#E9ECEF] rounded-md overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-[30%] before:bg-themeColor"></div>
                        </div>
                     </div>

                     <div className="col-span-1">
                        <div className="">
                           <div className="flex justify-between mb-2">
                              <h6 className="font-poppins text-base text-contactHead font-medium">React.js</h6>
                              <h6 className="font-poppins text-base text-contactHead font-medium"><span>55</span>%</h6>
                           </div>
                           <div className="relative w-full h-2 bg-[#E9ECEF] rounded-md overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-[55%] before:bg-themeColor"></div>
                        </div>
                     </div>

                     <div className="col-span-1">
                        <div className="">
                           <div className="flex justify-between mb-2">
                              <h6 className="font-poppins text-base text-contactHead font-medium">Node.js</h6>
                              <h6 className="font-poppins text-base text-contactHead font-medium"><span>20</span>%</h6>
                           </div>
                           <div className="relative w-full h-2 bg-[#E9ECEF] rounded-md overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-[20%] before:bg-themeColor"></div>
                        </div>
                     </div>

                  </div>
               </div>

               <button className="flex items-center border-[1px] border-solid border-resumeBtn py-3 px-40 rounded-customRadius shadow-btnShadow font-poppins text-base text-resumeBtn font-medium mx-auto mt-70 duration-300 ease-in hover:bg-resumeBtn hover:text-white">Download Cv <FaDownload className="ml-2.5 text-lg" /></button>
            </div>
         </section>
      </>
   )
}

export default Services