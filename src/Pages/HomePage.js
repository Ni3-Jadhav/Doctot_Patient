import NavBarFirst from "../Components/NavBar_1";
import NavBarSecondComp from "../Components/NavBar_2Comp";
import '../CSSFile/NavBar_CSS.css'
const HomePage =()=>{
    return(
        <>
       {<NavBarFirst/>}
       {<NavBarSecondComp/>}
        </>
    )
}
export default HomePage;