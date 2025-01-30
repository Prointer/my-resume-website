import React from "react"
import profilePhoto from './assets/main_photo.jpg'
import "./MainPage.css"; // Подключаем стили

const MainPage = () => {
  return (
    <div className="main-page">
      {/* Левая секция */}
      <div className="left-section">
        <h1>Vladyslav Omelianenko</h1>
        <div className="social-links">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
        <button className="contact-button">Contact Me</button>
      </div>

      {/* Центральная секция с фото */}
      <div className="center-section">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
      </div>

      {/* Правая секция */}
      <div className="right-section">
        <h3>INTRODUCTION</h3>
        <h2>UI/UX Designer, Front-end Developer</h2>
        <blockquote className='quote'>
        "Cooking and coding – a matter of precise ingredients." <span>-ChatGPT</span>
        </blockquote>
        <button className="learn-more">Learn More</button>
      </div>
    </div>
  );
};

export default MainPage;