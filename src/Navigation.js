import React from 'react';
import './Navigation.css';

const Navigation = (props) => {

    function ani(){
        if (document.getElementById("navi-toggle").checked == true) {
            /* White colors to the first line of the Grid */
            document.getElementById('we-text').style.color = "white";
            document.getElementById('line-text').style.borderTop = "0.5rem solid white";
            document.getElementById('are-text').style.color = "white";
        }
        else{
            /* Black colors to the first line of the Grid */
            document.getElementById('we-text').style.color = "black";
            document.getElementById('line-text').style.borderTop = "0.5rem solid black";
            document.getElementById('are-text').style.color = "black";
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