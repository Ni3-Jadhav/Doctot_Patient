import imgURL from "../images/consel_1.jpeg";
import '../CSSFile/Form_CSS.css';
import { useEffect, useRef, useState } from "react";

const DoctorRegComp = () => {

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const [selectedSpeciality, setSelectedSpeciality] = useState('');
    const dropdownRef = useRef(null);
    const inputRef = useRef(null);

    const specialities = [
                            "Speciality-1", "Speciality-2", "Speciality-3", "Speciality-4",
                            "Speciality-5", "Speciality-6", "Speciality-7", "Speciality-8"
                         ];

    const showDropDown = () => {
        setDropdownVisible(true);
    };

    const selectSpeciality = (speciality) => {
        setSelectedSpeciality(speciality);
        setDropdownVisible(false);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current && !dropdownRef.current.contains(event.target) &&
            inputRef.current && !inputRef.current.contains(event.target)
        ) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleShowTerms = () => {
        setShowTerms(!showTerms);
    };

    return (
        <>
            <div class="body-box">
                <div class="heading-msg" id='up'>
                    <h2>Join HealPoint Medical Clinic</h2>
                    <h3>"Empower Your Practice with HealPoint."</h3>
                    <h3 class="quote">"Your expertise, our platform - a Partnership for better health."- HealPoint Medical
                        Clinic</h3>
                </div>
                <div class="registration-container">
                    <form class="registration-form dr-reg-form">
                        <h2>Doctor Registration</h2>
                        <div class="form-box">
                            <div class="form-group">
                                <label for="fullName">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    required
                                    placeholder="Enter Full Name"
                                />
                            </div>
                            <div class="form-group">
                                <label for="license">License Number</label>
                                <input
                                    type="text"
                                    id="license"
                                    name="license"
                                    required
                                    placeholder="Enter License No."
                                />
                            </div>
                        </div>
                        <div class="form-box">
                            <div className="form-group">
                                <label htmlFor="speciality">Specialist</label>
                                <input
                                    type="text"
                                    id="speciality"
                                    name="speciality"
                                    required
                                    placeholder="Select Speciality"
                                    readOnly
                                    onClick={showDropDown}
                                    value={selectedSpeciality}
                                    ref={inputRef}
                                />
                                {dropdownVisible && (
                                    <ul id="speciality-dropdown" ref={dropdownRef}>
                                        {specialities.map((speciality, index) => (
                                            <li key={index} onClick={() => selectSpeciality(speciality)}>
                                                {speciality}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div class="form-group">
                                <label for="certificate">Qualification</label>
                                <input
                                    type="text"
                                    id="certificate"
                                    name="certificate"
                                    required
                                    placeholder="Enter Qualification"
                                />
                            </div>
                        </div>

                        <div class="form-box">
                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    placeholder="Enter Phone No."
                                />
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Enter Email Id"
                                />
                            </div>
                        </div>

                        <div class="form-group last-group">
                            <label>Gender</label>
                            <div class="gender-options">
                                <label><input type="radio" name="gender" value="male" required /> Male</label>
                                <label><input type="radio" name="gender" value="female" required /> Female</label>
                                <label><input type="radio" name="gender" value="other" required /> Other</label>
                            </div>
                        </div>
                        <div class="form-box">
                            <div class="form-group last-group">
                                <label for="address">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    required
                                    placeholder="Enter Working Location"
                                />
                            </div>
                            <div class="form-group last-group">
                                <label for="pass">PassWord</label>
                                <input
                                    type="password"
                                    id="pass"
                                    name="pass"
                                    required
                                    placeholder="Create PassWord"
                                />
                            </div>
                        </div>
                        <div className="form-checkbox">
                            <input type="checkbox" name="terms" id="terms" />
                            <p>Accept All Terms & Conditions.<a onClick={handleShowTerms}>Read All.</a></p>
                            {showTerms && (
                                <div id="term-dropdown">
                                    <p>
                                        By registering with HealPoint Medical Clinic, you agree to adhere to our professional standards
                                        and provide compassionate, high-quality care to all patients.
                                    </p>
                                </div>
                            )}
                        </div>
                        <button type="submit">Submit</button>
                        <p>Already Have Register ? Login Here →</p>
                    </form>
                    <div class="registration-img dr-reg-img">
                        <img src={imgURL} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </>
    )
};

export default DoctorRegComp;