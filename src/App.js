import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import CircularProgress from '@material-ui/core/CircularProgress';

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

import {loadWeather} from './redux/actions/weatherActions';

class App extends React.Component {

  componentDidMount() {
    this.props.loadWeather('brisbane','au');
  }

  render(){
    return (  
      <div className="App">
        <div className="weather-channel__container">
          <Header />
          <Nav />
          {this.props.errorMessage && <p> {this.props.errorMessage} </p>}
          {
            this.props.isLoading? <CircularProgress color="primary" size="10em" /> : <Main />
          }
          
          <Footer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoading: state.weather.isLoading,
    errorMessage: state.weather.errorMessage
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    loadWeather: (city,cc) => dispatch(loadWeather(city,cc))
  };
};

export default connect(mapStateToProps,mapDispatchToProps) (App);
