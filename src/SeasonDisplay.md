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
    // for notes, refer to bottom
    const season = getSeason(props.lat, new Date().getMonth()); // define what the season is so we can code accordingly.
    //seasonConfig[season] // {text, iconName} 
    // TO STRUCTURE OUT seasonConfig to get the text and iconName:
    const { text, iconName } = seasonConfig[season];    // now we can call it in our return div
                            
       
    // Refactored this to seasonConfig
        // const text = season === 'winter' ? "Burr, It's supposed to be chilly" : "Let's hit the beach!";
        // const icon = season === 'winter' ? 'snowflake outline' : 'sun';   // determining the icon to use from semantics

    // console.log(season)     // to check and make sure we are returning the right season in DOM                 
    // SHOWING THE ICON BELOW
    return ( 
        <div>
            <i className = {`${iconName} icon`} />   
            <h1>{text}</h1>
            <i className = {`${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;

// console.log(props.lat);

    // now that we got lat to show in our 'SeasonDisplay' component,
    // now we have to figure out the current month
    // and use the latitude to determine if it's Summer or Winter
    // Return the date: newDate().getMonth();
        // Northern Hemishpere: if you are between April & Spetembe (months 3 - 8), it's summer 
        // Southern Hemispher: if user is Jan-March (0-2) or Oct-Dec,(9-11), it's winter

    // get the season by determing the latitude and the current month