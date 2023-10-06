const Banner = () => {
   return (
      <>
         <section className="">
            <div className="fixed w-full z-[-1]">
               <div className="sunny relative h-screen w-full bg-bannerBg bg-no-repeat bg-cover">
                  <div className="overlay w-full h-full bg-[#000000c9] absolute top-0 left-0"></div>
               </div>
            </div>
            <div className="h-screen bg-transparent flex flex-col items-center justify-center ml-[300px]">
               <h3 className="relative font-poppins text-[28px] text-white font-medium leading-[50px] after:absolute after:content-[''] after:bottom-0 after:right-0 after:translate-x-[25px] after:translate-y-[-15px] after:w-[20px] after:h-[2px] after:bg-white">Hello</h3>
               <h1 className="font-poppins text-[65px] text-white font-semibold leading-[83px] my-4">I'm Sajjad Hossain Sunny.</h1>
               <p className="font-poppins text-xl text-[#DEE3E4] leading-[35px]">based in Dhaka, Bangladesh.</p>
               <button className="px-[40px] py-[15px] mt-8 rounded-customRadius border-[1px] border-solid border-themeColor font-poppins text-base text-themeColor font-medium duration-500 hover:bg-themeColor hover:text-white">Hire Me</button>
            </div>
         </section>
      </>
   )
}

export default Banner