
const Portfolio = () => {
   return (
      <>
         <section id="portfolio" className="bg-white">
            <div className="max-w-customContainer mx-auto px-3 py-70">
               <div className="relative mb-12">
                  <h2 className="sectionHeading font-poppins text-[130px] text-headingTextShadow font-bold text-center">PORTFOLIO</h2>
                  <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                     <p className="font-poppins text-4xl text-headingText font-semibold select-none relative after:content-[''] after:absolute after:w-[80px] after:h-[2px] after:bg-themeColor after:left-1/2 after:bottom-[0] after:translate-x-[-50%] after:translate-y-2">My Works</p>
                  </div>
               </div>

               <div className="mb-12 flex justify-center">
                  <h6 className="active font-poppins text-paragraph text-base px-4 py-2.5 inline-block cursor-pointer duration-300 relative after:content-[''] after:w-full after:h-[2px] after:bg-themeColor after:absolute after:bottom-0 after:left-0 after:duration-500 after:ease-in-out after:scale-x-0 hover:text-themeColor hover:after:scale-x-100">All</h6>
                  <h6 className="font-poppins text-paragraph text-base px-4 py-2.5 inline-block cursor-pointer duration-300 relative after:content-[''] after:w-full after:h-[2px] after:bg-themeColor after:absolute after:bottom-0 after:left-0 after:duration-500 after:ease-in-out after:scale-x-0 hover:text-themeColor hover:after:scale-x-100">E-commerce</h6>
                  <h6 className="font-poppins text-paragraph text-base px-4 py-2.5 inline-block cursor-pointer duration-300 relative after:content-[''] after:w-full after:h-[2px] after:bg-themeColor after:absolute after:bottom-0 after:left-0 after:duration-500 after:ease-in-out after:scale-x-0 hover:text-themeColor hover:after:scale-x-100">Portfolio</h6>
                  <h6 className="font-poppins text-paragraph text-base px-4 py-2.5 inline-block cursor-pointer duration-300 relative after:content-[''] after:w-full after:h-[2px] after:bg-themeColor after:absolute after:bottom-0 after:left-0 after:duration-500 after:ease-in-out after:scale-x-0 hover:text-themeColor hover:after:scale-x-100">Entertainment</h6>
                  <h6 className="font-poppins text-paragraph text-base px-4 py-2.5 inline-block cursor-pointer duration-300 relative after:content-[''] after:w-full after:h-[2px] after:bg-themeColor after:absolute after:bottom-0 after:left-0 after:duration-500 after:ease-in-out after:scale-x-0 hover:text-themeColor hover:after:scale-x-100">Landing Page</h6>
               </div>

               <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-1 cursor-pointer">
                     <div className="filters rounded-[5px] overflow-hidden relative">
                        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#000000A6] flex flex-col justify-center items-center">
                           <p className="font-poppins text-white text-lg mb-1">Project</p>
                           <h4 className="font-poppins text-white text-3xl font-medium">FoodMood</h4>
                        </div>
                        <img src="images/portfolio/project-1.jpg" alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Portfolio