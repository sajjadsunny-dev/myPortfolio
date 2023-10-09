import AboutMe from "../../components/AboutMe/AboutMe"
import Banner from "../../components/Banner/Banner"
import Services from "../../components/Services/Services"
import Resume from "../../components/Resume/Resume"
import Contact from "../../components/Contact/Contact"
import Portfolio from "../../components/Portfolio/Portfolio"


const Contents = () => {
   return (
      <>
         <Banner />
         <div className="ml-0 md:landscape:ml-[265px] xl:landscape:ml-[300px]">
            <AboutMe />
            <Services />
            <Resume />
            <Portfolio />
            <Contact />
         </div>
      </>
   )
}

export default Contents