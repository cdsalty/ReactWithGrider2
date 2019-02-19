import React from 'react';
import ReactDOM from 'react-dom';




class App extends React.Component{
    constructor(props){
        super(props);

        this.state = { lat: null, errorMessage: '' }; //Null, because we don't know the value yet.
    
        window.navigator.geolocation.getCurrentPosition(

            /*
            Originally, it was setup like:
            position => console.log(position),      //This would allow us to see the path to set the lat position at which is later set to position.coords.latitude.
            err => console.log(err)
            */
            position => {
                this.setState({ lat: position.coords.latitude });
                // IMPORTANT TO NOTE: the callback above WILL NOT BE INVOKED 
                // UNTIL WE GET BACK UP TO THE CONSTRUCTOR FUNCTION
            
            },
            // err => console.log(err)
            // the properties in the console log showed us that message was the error.
            err => {
                this.setState({errorMessage: err.message});
            }

        );   
    
    }


    render() {
        // Has Latitude     &&      No errorMessage
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage} </div>;
        }
        // No Latitude      &&      Has errorMessage
        if (!this.state.errorMessage && this.state.lat) {
            return <div> Error: {this.state.lat} </div>;
        }
        // No Latitude      &&      No errorMessage
        else {
            return <div>L O A D I N G !</div>;
        }
        
        // return <div>Latitude: {this.state.lat}</div>;
    }
};




ReactDOM.render(<App />,
    document.querySelector('#root'));