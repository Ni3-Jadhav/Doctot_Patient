import AboutComp from "../Components/AboutComp"
import FooterComp from "../Components/FooterComp"
import NavBarFirst from "../Components/NavBar_1"
import NavBarSecondComp from "../Components/NavBar_2Comp";

const AboutPage = ()=>{
    return(
        
        <>
            {<NavBarFirst/>}
            {<NavBarSecondComp/>}
            {<AboutComp/>}
            {<FooterComp/>}
        </>
    )
};
export default AboutPage;