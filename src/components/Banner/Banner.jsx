const Banner = () => {
   return (
      <>
         <section className="">
            <div className="fixed w-full z-[-1]">
               <div className="relative h-screen w-full">
                  <img className="w-full h-full object-cover" src="images/myBanner.jpg" alt="myBanner.jpg" />
                  <div className="w-full h-full bg-[#000000c9] absolute top-0 left-0"></div>
               </div>
            </div>
            <div className="h-screen w-full xl:w-auto md:landscape:w-auto bg-transparent flex flex-col items-center justify-center md:landscape:ml-[265px] xl:landscape:ml-[300px] px-3 md:px-0">
               <h3 className="relative font-poppins text-[23px] sm:portrait:text-[28px] md:text-[28px] text-white font-medium leading-[50px] after:absolute after:content-[''] after:bottom-0 after:right-0 after:translate-x-[22px] xl:after:translate-x-[25px] after:translate-y-[-15px] after:w-[20px] after:h-[2px] after:bg-white">Hello</h3>
               <h1 className="font-poppins text-[34px] sm:portrait:text-[50px] md:text-[50px] xl:text-[65px] text-white font-semibold xl:leading-[83px] text-center my-2 sm:portrait:my-4 md:my-4">I'm Sajjad Hossain Sunny.</h1>
               <p className="font-poppins text-base sm:portrait:text-xl md:text-xl text-[#DEE3E4] leading-[35px]">based in Dhaka, Bangladesh.</p>
               <button className="px-[25px] sm:portrait:px-40 md:px-40 py-2 sm:portrait:py-[15px] md:py-[15px] mt-8 rounded-customRadius border-[1px] border-solid border-themeColor font-poppins text-base text-themeColor font-medium duration-500 hover:bg-themeColor hover:text-white tracking-wider">Hire Me</button>
            </div>
         </section>
      </>
   )
}

export default Banner