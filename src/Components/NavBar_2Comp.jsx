

import { useNavigate } from 'react-router-dom';
import '../CSSFile/NavBar_CSS.css';

const NavBarSecondComp = () => {

    // const navigation = useNavigate()

    return (
        <>
            <div class="navbar_2">
            <ul class="list_2">
                <li><a href="#news-feed"><i class="fa-solid fa-users-between-lines"></i> News Feed </a></li>
                <li> <i class="fa-regular fa-lightbulb"></i> Suggestion
                    <ul id="dropdown_1" class="dropdown_list">
                        <li>Specialization_1</li>
                        <li>Specialization_2</li>
                        <li>Specialization_3</li>
                        <li>Specialization_4</li>
                        <li>Specialization_5</li>
                        <li>Specialization_6</li>
                    </ul>
                </li>
                <li><i class="fa-regular fa-calendar-check"></i> Book Appointment</li>
                <li><i class="fa-solid fa-hand-holding-heart"></i> Our Service
                    <ul id="dropdown_2" class="dropdown_list">
                        <li>Service_1</li>
                        <li>Service_2</li>
                        <li>Service_3</li>
                        <li>Service_4</li>
                    </ul>
                </li>
            </ul>
        </div>
        </>
    )
};
export default NavBarSecondComp;