import React, { useState } from 'react';
import './main.scss';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";





const Main = () => {
  const background = [
    process.env.PUBLIC_URL + '/img/main1.png', // 절대 경로로 설정
    process.env.PUBLIC_URL + '/img/main2.png',
    process.env.PUBLIC_URL + '/img/main3.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? background.length - 1 : prevIndex - 1);
  }

  const nextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === background.length - 1 ? 0 : prevIndex + 1);
  }

  return (
    <div>
      <div className="main-container" style={{ backgroundImage: `url(${background[currentIndex]})` }}>
        <div className="main-content">
          <nav>
            <ul>
              <li>Home</li>
              <li>특가</li>
              <li>항공</li>
              <li>여행사</li>
              <li>도착지 날씨</li>
            </ul>

          </nav>


        </div>

        
        <div className='main-title-container'>
            <div className='main-title'>
              <FaArrowLeft onClick={handleClick} className='arrow-left' />
              <h3>새로운 세상</h3>
              <FaArrowRight onClick={nextClick} className='arrow-right' />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Main;