import React from 'react';
import './Experience.css';
import '../../styles/global.css';

const Experience = () => {
    return ( 
        <div className="experience container tc">
            <h1 class="experience__title">Experience</h1>
            <div className="experience__items">
                <div className="experience__item tl">
                    <div className="company">Entelect</div>
                    <div className="role">Software Engineer</div>
                    <div className="duration">Aug 2019 - Current</div>
                </div>
                <div className="experience__item tl">
                    <div className="company">PSG Wealth</div>
                    <div className="role">Junior Developer</div>
                    <div className="duration">Oct 2018 - Jul 2019</div>
                </div>
                <div className="experience__item tl">
                    <div className="company">EOH</div>
                    <div className="role">Analyst Consultant</div>
                    <div className="duration">May 2015 - Jun 2018</div>
                </div>
                
            </div>
            
        </div>
     );
}
 
export default Experience;