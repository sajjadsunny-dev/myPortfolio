import AboutMe from "../../components/AboutMe/AboutMe"
import Banner from "../../components/Banner/Banner"


const Contents = () => {
   return (
      <>
         <Banner />
         <div className="ml-[300px]">
            <AboutMe />
         </div>
      </>
   )
}

export default Contents