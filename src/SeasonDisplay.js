import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's go to the beach",
        iconName: "sun"
    },
    winter: {
        text: "Burr... it should be could outside.",
        iconName: "snowflake"
    }
};

// We need the latitude and month to determine the Season to display
const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => { 

    const season = getSeason(props.lat, new Date().getMonth()); // define what the season is so we can code accordingly.
    // const season = "summer";    // Just for testing
    console.log(season);
    const { text, iconName } = seasonConfig[season];    // now we can call it in our return div
          // We named 'season-display' as so to make it easier to style                  
    return ( 
        <div className={`season-display ${season}`} >
            <i className = {`icon-left massive ${iconName} icon`} />   
            <h1>{text}</h1>
            <i className = {`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;