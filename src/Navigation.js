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
            /* Animation of D.M STUDIO text and 01 OUR SERVICES text when navigation is open*/
            setTimeout(function() {
                document.getElementById('DMSTUDIO-text').classList.add('animation1-TextUp')
                document.getElementById('ourServices-text').classList.add('animation2-TextUp')
            },400)
            /* Animation of first Line */
            setTimeout(function() {
                document.getElementById('navline1').classList.add('animation3-LineExpand')
            },700)
            /* Animation of Second Line */
            setTimeout(function() {
                document.getElementById('navline2').classList.add('animation3-LineExpand')
            },1000)
            /* Animation of 02 Nav Item */
            setTimeout(function() {
                document.getElementById('whoWeAre-text').classList.add('animation2-TextUp')
            },1300)
            /* Animation of Third Line */
            setTimeout(function() {
                document.getElementById('navline3').classList.add('animation3-LineExpand')
            },1600)
            /* Animation of 03 Nav Item */
            setTimeout(function() {
                document.getElementById('hotCases-text').classList.add('animation2-TextUp')
            },1900)
            /* Animation of Fourth Line */
            setTimeout(function() {
                document.getElementById('navline4').classList.add('animation3-LineExpand')
            },2100)
            /* Animation of 04 Nav Item */
            setTimeout(function() {
                document.getElementById('letsTalk-text').classList.add('animation2-TextUp')
            },2400)
            
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

            /* Time dependent animations */
            /* Animation of D.M STUDIO text and 01 OUR SERVICES text when navigation is closed*/
            document.getElementById('DMSTUDIO-text').classList.remove('animation1-TextUp');
            document.getElementById('ourServices-text').classList.remove('animation2-TextUp')
            /* Animation for first Line */
            document.getElementById('navline1').classList.remove('animation3-LineExpand');
            /* Animation of Second Line */
            document.getElementById('navline2').classList.remove('animation3-LineExpand');
            /* Animation for 02 Nav Item */
            document.getElementById('whoWeAre-text').classList.remove('animation2-TextUp');
            /* Animation of Third Line */
            document.getElementById('navline3').classList.remove('animation3-LineExpand');
            /* Animation of 03 Nav Item */
            document.getElementById('hotCases-text').classList.remove('animation2-TextUp');
            /* Animation of Fourth Line */
            document.getElementById('navline4').classList.remove('animation3-LineExpand');
            /* Animation of 04 Nav Item */
            document.getElementById('letsTalk-text').classList.remove('animation2-TextUp');
        }
    }

        return (
            <div className="navigation__fullscreen">
                <input type="checkbox" checked={props.checked} onChange={props.handleManageCheckBox} onClick={ani} className="navigation__checkbox" id="navi-toggle"/>
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>
                <div className="navigation__background">&nbsp;</div>  
                

                <div className="navigation-grid">
                    <div className="nav-ourServices" id="ourServices-text"> 
                        <span> 01 </span>
                        <span> OUR SERVICES </span> 
                    </div>
                    <div className="nav-line" id="navline1"> </div>

                    <div className="nav-line" id="navline2"> </div>
                    <div className="nav-whoWeAre" id="whoWeAre-text"> 
                        <span>02</span>
                        <span>WHO WE ARE</span>
                    </div>
                    <div className="nav-line" id="navline3"> </div>


                    <div className="nav-hotCases" id="hotCases-text"> 
                        <span>03</span>
                        <span>HOT CASES</span>
                    </div>
                    <div className="nav-line" id="navline4"> </div>
                    <div className="nav-letsTalk" id="letsTalk-text">
                        <span>04</span>
                        <span>LET'S TALK</span>
                    </div>
                    
                </div>
            </div>
        );
}

export default Navigation;  