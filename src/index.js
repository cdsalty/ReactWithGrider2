import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'



class App extends React.Component{
   state = { lat: null, errorMessage: ''};  // using babel, same as setting up Constructor and Super
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate(){
        console.log("My component was just updated... I suppose it R E -- R E N D E R E D");
    }

    

    // CONDITIONAL RENDERING
    render() {
        // Have an error message and do not have a lattitude.           SHOW ERROR
        if(this.state.errorMessage && !this.state.lat)  {
            return <div>Error: {this.state.errorMessage} </div>;
        }
        // if no error message
        if(!this.state.errorMessage && this.state.lat) {
            // return <div>Your current lattidude position:  {this.state.lat} </div>;
            return <SeasonDisplay lat ={this.state.lat} />
        }else{
            return <div>L O A D I N G</div>
        }
        
        // return <div>Latitude: {this.state.lat}</div>;
    }
};




ReactDOM.render(<App />, document.querySelector('#root'));