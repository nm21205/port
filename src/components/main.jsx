import React from 'react';
import 'typeface-roboto';


import './main.scss';

const Main = () => {
  return (
    <div>
      <div className="main-container">
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
      </div>
    </div>
  );  
};  

export default Main;
