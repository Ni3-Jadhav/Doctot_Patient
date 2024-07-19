import DoctorRegComp from "../Components/DoctorRegComp"
import FooterComp from "../Components/FooterComp"
import NavBarFirst from "../Components/NavBar_1"

const DoctorRegPage = ()=>{
    return(
        <>
        {<NavBarFirst/>}
        {<DoctorRegComp/>}
        {<FooterComp/>}
        </>
    )
};

export default DoctorRegPage;