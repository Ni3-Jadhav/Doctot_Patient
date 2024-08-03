import { useEffect, useState } from 'react';
import '../CSSFile/Home_CSS.css';
import imgUrl from '../images/consel_1.jpeg';

const HomeComp = () => {

    const [currentIndex , setCurrentIndex] = useState(0);

    const slides =[
        {
            newsTeller : 'xyz',
            newsContent :'fist news 111',
            timeOfPost : '1 day'
        },
        {
            newsTeller : 'abc',
            newsContent :'second news 222',
            timeOfPost : '2 days'
        },
        {
            newsTeller : 'aaa',
            newsContent :'third news 333',
            timeOfPost : '20 hours'
        },
        {
            newsTeller : 'dr.hh',
            newsContent :'fourth news 444',
            timeOfPost : '3 days'
        }
    ];

    const totalSlides =slides.length;

    useEffect (()=>{
        const slidesInterval = setInterval(()=>{
            setCurrentIndex((currentIndex + 1)% totalSlides);
        },6500);
        return () => clearInterval(slidesInterval);
    },[currentIndex ,totalSlides]);

    const handleNextSlide = () =>{
        setCurrentIndex((currentIndex + 1) % totalSlides);
    };

    const handlePreviuosSlide = () => {
        setCurrentIndex((currentIndex -1 + totalSlides) % totalSlides);
    };
    
    return (
        <>
            <div class="home-page" >
                <div class="box" id="up">
                    <div class="box-content">
                        <div class="text">
                            <h1>HealPoint</h1>
                            <h2>Medical Clinic</h2>
                            <p> Experience top-notch healthcare with <strong>HealPoint Medical Clinic</strong>, where expert
                                doctors offer personalized <strong> consultations</strong> from your home. For in-person care,
                                visit our nearby medical center. HealPoint is dedicated to your health, providing trusted and
                                convenient care.
                            </p>
                            <button type="button">Schedule Consultation <i class="fa-solid fa-arrow-right-to-bracket"></i></button>
                        </div>
                    </div>
                    <img src={imgUrl} alt="" srcset="" />
                </div>
                <div class="box_1">
                    <h2>Medical Checkup Camp</h2>
                    <p> <strong>HealPoint Medical Clinic </strong>invites you to a health checkup camp. Services include blood
                        pressure monitoring, diabetes screening, cholesterol tests, and general health consultations.
                        Our expert medical team will provide personalized advice and health tips. All ages are welcome
                        to join us for a comprehensive health evaluation.
                        Stay proactive about your health with our professional care and support.<strong>Healthy Welcome to All !</strong>
                        <br />
                        <button type="button">Be Well, Be Seen.<i class="fa-solid fa-arrow-right-to-bracket"></i></button>
                        <button type="button">Know More →</button>
                    </p>
                    <div class="camp_img">
                        <div> <img src={imgUrl} alt="" srcset="" />
                            <h4>It's a privilege to use our skills to serve those in need.</h4>
                        </div>
                        <div> <img src={imgUrl} alt="" srcset="" />
                            <h4> Seeing the smiles on patients' faces is the greatest reward.</h4>
                        </div>

                        <div> <img src={imgUrl} alt="" srcset="" />
                            <h4>This medical camp shows the power of working together in healthcare.</h4>
                        </div>
                        <div> <img src={imgUrl} alt="" srcset="" />
                            <h4> Onwards to a healthier future with more medical camps!</h4>
                        </div>

                    </div>

                </div>
                <div class="box_2">
                    <h2>Join Force With <br />
                        Country's Top Hospitals & <br />
                        Specialist Doctors
                    </h2>
                    <div class="box_2_content">
                        <div class="box_2_img"><img src={imgUrl} alt="" srcset="" /></div>
                        <div class="box_2_text">
                            <h3>Dr. Anand Kapoor,</h3>
                            <p>
                                A renowned <strong>Ophthalmologist </strong>with over 15 years of experience, specializes
                                in advanced cataract surgery techniques. He has performed over 2,000 successful cataract
                                procedures, restoring vision and improving the lives of countless patients.
                            </p>
                        </div>
                    </div>
                    <div class="box_2_content">
                        <div class="box_2_text">
                            <h3> Dr. Aisha Sharma,</h3>
                            <p>
                                A passionate<strong> Dermatologist</strong> for the past 10 years, focuses on helping patients
                                achieve healthy, glowing skin.  She was awarded "Top Doctor in Dermatology" by a NGO
                                for her innovative treatment plans.
                            </p>
                        </div>
                        <div class="box_2_img"><img src={imgUrl} alt="" srcset="" /></div>

                    </div>
                    <div class="box_2_content">
                        <div class="box_2_img"><img src={imgUrl} alt="" srcset="" /></div>
                        <div class="box_2_text">
                            <h3>Thrive Healthcare,</h3>
                            <p>
                                Our team of specialists provides exceptional care across all specialties. Recognized for achieving
                                a <strong> 90% patient's</strong> satisfaction rate, Thrive offers personalized treatment plans for all your
                                healthcare needs. Schedule an appointment today and experience the Thrive difference.
                            </p>
                        </div>
                    </div><div class="box_2_content">
                        <div class="box_2_text">
                            <h3>Dr. Priya Desai,</h3>
                            <p>
                                Dedicated <strong>Cardiologist</strong> with 12 years of experience, is passionate about
                                providing her patients with exceptional heart care. Dr. Desai successfully implemented a new
                                cardiac rehabilitation program that resulted in a 20% improvement in patient recovery times.
                            </p>
                        </div>
                        <div class="box_2_img"><img src={imgUrl} alt="" srcset="" /></div>

                    </div>
                    <button type="button">View All →</button>
                </div>
                <div class="news-feed-container">
                    <h2 class="news-feed-heading" id="news-feed" >News Feed</h2>
                    <div class="news-feed-slideshow">
                       { slides.map((slide ,index) =>(
                         <div key={index} class={`news-feed-slide ${index === currentIndex ? 'active' : ''}`}>
                         <p class="news-teller">{slide.newsTeller}</p>
                         <p class="news-content">{slide.newsContent}</p>
                         <p class="news-time">{slide.timeOfPost} ago</p>
                     </div>

                       ))}
                    </div>
                    <button class="news-nav-btn prev-btn" onClick={handlePreviuosSlide}>←</button>
                    <button class="news-nav-btn next-btn" onClick={handleNextSlide}>→</button>
                </div>
            </div>
        </>
    )
};

export default HomeComp;