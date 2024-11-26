import React from 'react';
import image1 from './Images/2.png';
import image2 from './Images/3.png';
import image3 from './Images/image1.png';
import image4 from './Images/i5.png';
import './Images/Home.css';

const Home = () => {
  return (
    <div>
      
      <img className="resim1" src={image4} alt="Sunset over the ocean" />
      <img className="resim1" src={image2} alt="Snow-covered mountain peak" />
      <img className="resim1" src={image3} alt="Dense forest with tall trees" />
    </div>
  );
};

export default Home;
