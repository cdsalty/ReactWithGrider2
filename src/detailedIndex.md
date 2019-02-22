import React from 'react';
import ReactDOM from 'react-dom';

// The following function will get the users location. 
// Information taken from https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
// const App = () => {
//      window.navigator.geolocation.getCurrentPosition(    // taken mostly from the docs; we sending 
//      it to the window/DOM here;
        //This is called our SUCCESS CALLBACK, callback #1
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

//   Coparision above is using a Function VS below, using a Class
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null }; //since we don't have a value for lat YET... but we will.

        window.navigator.geolocation.getCurrentPosition(
            // position =>console.log(position),   // Success Callback
            // err => console.log(err)             // Failure Callback, throw err
            position => {
            this.setState = ({ lat: position.coords.latitude });
            }, 
            err => console.log(err)
        );
    }
    render() {
        return (
        <div> Latitude:{this.state.lat}</div>
        );
    };    
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);