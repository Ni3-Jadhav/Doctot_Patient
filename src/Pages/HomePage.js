import FooterComp from "../Components/FooterComp";
import HomeComp from "../Components/HomeComp";
import NavBarFirst from "../Components/NavBar_1";
import NavBarSecondComp from "../Components/NavBar_2Comp";



const HomePage =()=>{
    return(
        <>
       {<NavBarFirst/>}
       {<NavBarSecondComp/>}
       {<HomeComp/>}
       {<FooterComp/>}
        </>
    )
}
export default HomePage;