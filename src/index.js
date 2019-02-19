import React from 'react';
import ReactDOM from 'react-dom';

// The following function will get the users location. 
// Information taken from https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(    // taken mostly from the docs except sending it to the window 
//         // our SUCCESS CALLBACK, callback #1
//         (position) => console.log(position), //we want to take the information and use it to show the location
        
//         // our ERROR CALLBACK when there is a conflict or error
//         (err) => console.log(err)       
//     )   
//     return <div>Hi There!</div>;
// };

//  ** Re-writing the above so it's compact/together **

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(    // WE TOOK THIS AND PASTED INOT OUR RENDER ()
//         position =>console.log(position),
//         err => console.log(err)
//     );

//     return <div>Latitude: </div>
// };

//   VERSES USES THE CLASS ROUTE
class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position =>console.log(position),
            err => console.log(err)
        );
        
        return <div> Latitude: </div>;
    };    
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);