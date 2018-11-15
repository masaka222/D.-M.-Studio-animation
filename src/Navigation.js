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
            </div>
        );
}

export default Navigation;  