import FooterComp from "../Components/FooterComp"
import NavBarFirst from "../Components/NavBar_1"
import PatientRegComp from "../Components/PatientRegComp"

const PatientRegPage = ()=>{
    return(
        <>
        {<NavBarFirst/>}
        {<PatientRegComp/>}
        {<FooterComp/>}
        </>
    )
};
export default PatientRegPage;