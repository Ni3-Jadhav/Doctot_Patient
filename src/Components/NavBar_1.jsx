const NavBarFirst =()=>{
    return(
        <>
        <div class="navbar_1">
            <div class="clinic_logo">
                <img src={`${process.env.PUBLIC_URL}/Medical Clinic Logo (2).png`} alt="clinic_logo" srcset=""/>
            </div>
            <div class="nav_list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>How To Use <i class="fa-solid fa-question"></i></li>
                    <li>Endorsement</li>
                </ul>
            </div>
            <div class="switch_btn">
                <button type="button">For Doctor</button>
                <button type="button">For Patient</button>
            </div>
            <div class="menu_bar">
                <input type="checkbox" id="checkbox_toggle"/>
                <label for="checkbox_toggle" class="hamburger">
                    <i class="fa-solid fa-bars"></i>
                    {/* <i class="fa-solid fa-xmark"></i> */}
                </label>
            </div>
        </div>
        </>
    )
}

export default NavBarFirst;