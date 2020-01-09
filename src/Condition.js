import React from 'react';
import umberella from './icon/icon-umberella.png';
import wind from './icon/icon-wind.png';
import compass from './icon/icon-compass.png';

const Condition = () => {
    return (
        <section className="weather-condition">
          <div className="weather-condition__location">Brisbane</div>
          <div style={{textAlign: 'center', fontSize: 14 + 'px'}}>Clear</div>
          <div className="weather-condition__temp">19 c</div>
          <div className="weather-condition__desc">
            <div>
              <img src={umberella} alt="umberella" />
              <span className="citem">20%</span>
            </div>
            <div>
              <img src={wind} alt="wind" /> <span className="citem">3 km/h</span>
            </div>
            <div>
              <img src={compass} alt="compass" /> <span className="citem">NE</span>
            </div>
          </div>
        </section>
    );
};

export default Condition;