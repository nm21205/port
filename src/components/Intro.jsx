import React from 'react';

import './Intro.scss';


const Intro = () => {
  return (
    <div>
      <div className='intro-container'>
        <div className='intro-title'>
          <h1>특가 상품</h1>
          <h2>300만원 이하</h2>
          <div className='intro-img'>
            <img src={process.env.PUBLIC_URL + '/img/price1.png'} alt='intro1' />
          </div>
        </div>
        <div className='intro-title'>
          <h1>특가 상품</h1>
          <h2>300만원 이하</h2>
          <div className='intro-img'>
            <img src={process.env.PUBLIC_URL + '/img/price2.png'} alt='intro1' />
          </div>
        </div>
        <div className='intro-title'>
          <h1>특가 상품</h1>
          <h2>300만원 이하</h2>
          <div className='intro-img'>
            <img src={process.env.PUBLIC_URL + '/img/price3.png'} alt='intro1' />
          </div>
        </div>
        <div className='intro-title'>
          <h1>특가 상품</h1>
          <h2>300만원 이하</h2>
          <div className='intro-img'>
            <img src={process.env.PUBLIC_URL + '/img/price4.png'} alt='intro1' />
          </div>
        </div>
        <div className='intro-title'>
          <h1>특가 상품</h1>
          <h2>300만원 이하</h2>
          <div className='intro-img'>
              <img src={process.env.PUBLIC_URL + '/img/price5.png'} alt='intro1' />
          </div>
        </div>
        <div className='intro-title'>
          <h1>특가 상품</h1>
          <h2>300만원 이하</h2>
          <div className='intro-img'>
            <img src={process.env.PUBLIC_URL + '/img/price6.png'} alt='intro1' />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Intro;