
import regImg from '../images/consel_1.jpeg';
import '../CSSFile/Form_CSS.css';

const PatientRegComp = () => {
    return (
        <> 
            <div className="body-box">
                <div class="heading-msg" id='up'>
                    <h2>Welcome to HealPoint Medical Clinic.</h2>
                    <h3>"Your Health Journey Starts Here."</h3>
                    <h3 class="quote">"The first step towards better health is taking the initiative to register." - HealPoint Medical Clinic</h3>
                </div>
                <div class="registration-container">
                    <div class="registration-img">
                        <img src={regImg} alt="" srcset="" />
                    </div>
                    <form class="registration-form">
                        <h2>Patient Registration</h2>
                        <div class="form-box">
                            <div class="form-group">
                                <label for="fullName">Full Name</label>
                                <input type="text" id="fullName" name="fullName" required placeholder='Enter Full Name'/>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" required placeholder='Enter Email ID'/>
                            </div>
                        </div>
                        <div class="form-box">
                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" required placeholder='Enter Phone no'/>
                            </div>
                            <div class="form-group">
                                <label for="age"> Age </label>
                                <input type="text" id="age" name="age" placeholder='Enter Age'/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Gender</label>
                            <div class="gender-options">
                                <label><input type="radio" name="gender" value="male" required /> Male</label>
                                <label><input type="radio" name="gender" value="female" required /> Female</label>
                                <label><input type="radio" name="gender" value="other" required /> Other</label>
                            </div>
                        </div>
                        <div class="form-box">
                            <div class="form-group">
                                <label for="address">Address</label>
                                <input type="text" id="address" name="address" required placeholder='Enter Address'/>
                            </div>
                            <div class="form-group">
                                <label for="password">PassWord</label>
                                <input type="password" id="password" name="password" required placeholder='Create PassWord'/>
                            </div>
                           
                        </div>
                        <button type="submit">Submit</button>
                        <p>Already Have Register ? Login Here →</p>
                    </form>
                </div>
            </div>
        </>
    )
};
export default PatientRegComp;