import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: "sun"
    },
    winter: {
        text: "Burr... it should be could outside",
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
    const { text, iconName } = seasonConfig[season];    // now we can call it in our return div
                            
    return ( 
        <div>
            <i className = {`${iconName} icon`} />   
            <h1>{text}</h1>
            <i className = {`${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;