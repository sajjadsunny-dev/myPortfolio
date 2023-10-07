import AboutMe from "../../components/AboutMe/AboutMe"
import Banner from "../../components/Banner/Banner"
import Services from "../../components/Services/Services"
import Resume from "../../components/Resume/Resume"


const Contents = () => {
   return (
      <>
         <Banner />
         <div className="ml-[300px]">
            <AboutMe />
            <Services />
            <Resume />
         </div>
      </>
   )
}

export default Contents