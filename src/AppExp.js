
import React, { useState, useEffect } from 'react';
import '../src/CSSFile/Home_CSS.css';

const AppExp =()=> {
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      teller: 'Dr. Jane Doe',
      content: 'New vaccine available for the seasonal flu. Ensure to get vaccinated to protect yourself and your loved ones. Stay healthy!',
      time: '1 day ago',
    },
    {
      teller: 'Health Ministry',
      content: 'Government announces new health guidelines to combat the spread of the latest virus strain. Follow the guidelines strictly for your safety.',
      time: '2 days ago',
    },
    {
      teller: 'Health Exp...',
      content: 'Government announces new health guidelines to combat the spread of the latest virus strain. Follow the guidelines strictly for your safety.',
      time: '2 days ago',
    },
    {
      teller: 'Exp..',
      content: 'Government announces new health guidelines to combat the spread of the latest virus strain. Follow the guidelines strictly for your safety.',
      time: '2 days ago',
    },
    {
      teller: 'Exp 2...',
      content: 'Government announces new health guidelines to combat the spread of the latest virus strain. Follow the guidelines strictly for your safety.',
      time: '2 days ago',
    }
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % totalSlides);
      console.log('1');
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, totalSlides]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  };
  return (
    <>
      <div className="news-feed-container">
      <h2 className="news-feed-heading">Latest Health News</h2>
      <div className="news-feed-slideshow">
        {slides.map((slide, index) => (
          <div key={index} className={`news-feed-slide ${index === currentIndex ? 'active' : ''}`}>
            <p className="news-teller">{slide.teller}</p>
            <p className="news-content">{slide.content}</p>
            <p className="news-time">{slide.time}</p>
          </div>
        ))}
      </div>
      <button className="news-nav-btn prev-btn" onClick={handlePrev}>←</button>
      <button className="news-nav-btn next-btn" onClick={handleNext}>→</button>
    </div>
    </>
  );
};

export default AppExp;
