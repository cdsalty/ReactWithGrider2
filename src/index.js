import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';


class App extends React.Component{
    // this.state = {lat: null};   //THIS WAS THE VERY FIRST SETUP
   state = { lat: null, errorMessage: ''};  // using babel, same as setting up Constructor and Super
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude })
            },
            // or you can write it as it is below...
            err => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate(){
        console.log("My component was just updated... I suppose it R E -- R E N D E R E D");
    }

    // CREATING A HELPER FUNCTION 
        // Copying our "render" directly to our newly created "HELPER FUNCTION"
    renderContent(){
        if(this.state.errorMessage && !this.state.lat)  {
            return <div>Error: {this.state.errorMessage} </div>;
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat ={this.state.lat} />
        }else{
            return <LoadingSpinner message="Please hold your horses" />
        } 
    };

    

  
    render() {
        return (
            <div className = "ifWe wantedborder red">
                {this.renderContent()}
            </div>
        );
        // Have an error message and do not have a lattitude.           SHOW ERROR
        // if(this.state.errorMessage && !this.state.lat)  {
        //     return <div>Error: {this.state.errorMessage} </div>;
        // }
        // if no error message
        // if(!this.state.errorMessage && this.state.lat) {
        //     // return <div>Your current lattidude position:  {this.state.lat} </div>;
        //     return <SeasonDisplay lat ={this.state.lat} />
        // }else{
        //     return <LoadingSpinner message="Please hold your horses" />
        // } 
        
        // return <div>Latitude: {this.state.lat}</div>;
    }
};




ReactDOM.render(<App />, document.querySelector('#root'));