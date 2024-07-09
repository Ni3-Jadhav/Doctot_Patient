import imgUrl from '../images/healthCenter2.jpeg';
import '../CSSFile/About_CSS.css';
const AboutComp = () => {
    return (
        <>
            <div class="about-container">
                <div class="about-header">
                    <h1 id='up'> HealPoint Medical Clinic</h1>
                    <p id='msg'><strong> "Connecting patients, doctors, and health centers with seamless ease."</strong></p>
                    <p>At HealPoint, we believe in the power of technology to transform healthcare. Our platform is designed to facilitate smooth interactions between healthcare providers and patients, ensuring timely medical attention and efficient management of health records.</p>
                    <p>With a robust network of hospitals and clinics nationwide,<strong> HealPoint Medical Clinic</strong> aims to bring healthcare closer to you, making it more accessible and affordable.</p>
                    <p>Join us in our mission to revolutionize healthcare and improve patient outcomes across the country.</p>
                </div>

                <div class="quote">
                    "The art of medicine consists of amusing the patient while nature cures the disease."
                </div>

                <div class="content-section">
                    <div>
                        <h2>Platform Overview</h2>
                        <p>HealPoint Medical Clinic is dedicated to enhancing the connectivity between doctors, patients, and healthcare centers. Our platform ensures easy registration, access to patient data for doctors, and availability information for patients.</p>
                    </div>
                    <div>
                        <h2>Doctor & Patient Registration</h2>
                        <p>Both doctors and patients can register on our platform. Doctors can manage their schedules and patient records, while patients can find and book appointments with available doctors.</p>
                    </div>
                    <div>
                        <h2>Hospital Network</h2>
                        <p>HealPoint Medical Clinic partners with  various hospitals across the country to provide comprehensive healthcare services. Patients can find hospitals offering the services they need through our platform.</p>
                    </div>
                    <div>
                        <h2>Our Mission</h2>
                        <p>Our mission is to create a healthcare ecosystem where patients and doctors can easily connect, ensuring timely and efficient medical care for everyone. We strive to leverage technology to bridge the gap in healthcare accessibility.</p>
                    </div>
                    <div>
                        <h2>Our Vision</h2>
                        <p>We envision a world where healthcare is accessible and affordable to all, with no barriers to quality medical services. HealPoint Medical Clinic aims to be a leader in healthcare technology, continuously innovating to improve patient outcomes.</p>
                    </div>
                </div>

                <div class="stats">
                    <h2>Why Choose HealPoint Medical Clinic?</h2>
                    <p>Our platform has already <strong>connected</strong> over 200+ doctors and 5000 patients nationwide,
                        providing reliable and efficient healthcare services.
                    </p>
                    <div class="img"><img src={imgUrl} alt="Healthcare Statistics" /></div>

                </div>

                <div class="quote">
                    "To array a man's will against his sickness is the supreme art of medicine."
                </div>
                <div class="quote">
                    "Wherever the art of medicine is loved, there is also a love of humanity."
                </div>
            </div>
        </>
    )
};

export default AboutComp;