import React from 'react';

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
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'winter' ? "Burr, It's probably chilly depending on the whole climate issue thing" : "Let's hit the beach!";

    // console.log(season)     // to check and make sure we are returning the right season in DOM                 
    return ( 
        <div>
        <h1>{text}</h1>
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