import React from 'react';
import './Navigation.css';

const Navigation = (props) => {

    function ani(){
        if (document.getElementById("navi-toggle").checked == true) {
            /* White colors to the first line of the Grid */
            document.getElementById('we-text').style.color = "white";
            document.getElementById('we-text').classList.add('hidden');
            document.getElementById('line-text').style.borderTop = "0.5rem solid white";
            document.getElementById('are-text').style.color = "white";
            document.getElementById('are-text').classList.add('hidden');

            /* Text and box dissapearance in the other lines */
            document.getElementById('about-text').style.opacity = "0";
            document.getElementById('about-text').classList.add('hidden');
            document.getElementById('experiences-text').style.opacity = "0";
            document.getElementById('experiences-text').classList.add('hidden');

            /* Time dependent animations */
        }
        else{
            /* Black colors to the first line of the Grid */
            document.getElementById('we-text').style.color = "black";
            document.getElementById('we-text').classList.remove('hidden');
            document.getElementById('line-text').style.borderTop = "0.5rem solid black";
            document.getElementById('are-text').style.color = "black";
            document.getElementById('are-text').classList.remove('hidden');

            /* Text and box dissapearance in the other lines */
            document.getElementById('about-text').style.opacity = "1";
            document.getElementById('about-text').classList.remove('hidden');
            document.getElementById('experiences-text').style.opacity = "1";
            document.getElementById('experiences-text').classList.remove('hidden');
        }
    }

        return (
            <div className="navigation__fullscreen">
                <input type="checkbox" checked={props.checked} onChange={props.handleManageCheckBox} onClick={ani} className="navigation__checkbox" id="navi-toggle"/>
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>
                <div className="navigation__background">&nbsp;</div>  
                {/*
                <div className="navigation-grid">
                    <div className="navigation-grid__services">
                        01 OUR SERVICES
                    </div>
                    <div className="navigation-grid__whoweare">
                        02 WHO WE ARE
                    </div>
                    <div className="navigation-grid__hotcases">
                        03 HOT CASES
                    </div>
                    <div className="navigation-grid__letstalk">
                        04 LET'S TALK
                    </div>
                </div>
                */}

                <div className="navigation-grid">
                    <div className="navmain-we" id="ourServices-text"> 
                        <span> 01 </span>
                        <span> OUR SERVICES </span> 
                    </div>
                    <div className="navmain-line" id="navline1"> </div>

                    <div className="navmain-line" id="navline2"> </div>
                    <div className="navmain-are" id="whoWeAre-text"> 
                        <span>02</span>
                        <span>WHO WE ARE</span>
                    </div>
                    <div className="navmain-line" id="navline3"> </div>


                    <div className="navmain-about" id="hotCases-text"> 
                        <span>03</span>
                        <span>HOT CASES</span>
                    </div>
                    <div className="navmain-line" id="navline4"> </div>
                    <div className="navmain-experiences" id="letsTalk-text">
                        <span>04</span>
                        <span>LET'S TALK</span>
                    </div>
                    
                </div>
            </div>
        );
}

export default Navigation;  