import '../CSSFile/NavBar_CSS.css';
import { useNavigate } from 'react-router-dom';
    
const NavBarFirst = () => {

    const navigation = useNavigate()

    return (
        <>
            <div class="navbar_1">
                <div class="clinic_logo">
                    <img 
                    src={`${process.env.PUBLIC_URL}/Medical Clinic Logo (2).png`} 
                    alt="clinic_logo" srcset="" 
                    onClick={ () => {navigation('/')}}
                    />
                </div>
                <div class="nav_list">
                    <ul>
                        <input type="checkbox" id="checkbox_toggle" />
                        <div class="menu_list">
                            <li onClick={ () => {navigation('/')}} >Home</li>
                            <li onClick={ () => {navigation('/about')}} >About</li>
                            <li onClick={ () => {navigation('/demo')}} >How To Use <i class="fa-solid fa-question"></i></li>
                            <li onClick={ () => {navigation('/endorsement')}} >Endorsement</li>
                        </div>
                    </ul>
                </div>
                <div class="switch_btn">
                    <button type="button" onClick={ () => {navigation('/doctorReg')}} >For Doctor</button>
                    <button type="button" onClick={ () => {navigation('/patientReg')}} >For Patient</button>
                </div>


                <label for="checkbox_toggle" class="hamburger">
                    <i class="fa-solid fa-bars" id="fa"></i>
                    <i class="fa-solid fa-xmark"></i>
                </label>
            </div>
        </>
    )
}

export default NavBarFirst;