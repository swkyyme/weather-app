import React from 'react';
import { connect } from 'react-redux';
import { updateUnitAction, setSearchValueCity, setSearchValueCc } from '../redux/actions/navActions'; //{toggleUnit as toggleUnitAction}
import { loadWeather } from '../redux/actions/weatherActions';


function Nav(props) {
    
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
			handleSearch();
		}
    }
    const handleUnit=() => {
        props.updateUnit();
      }
    const handleSearch = () => {
        props.loadWeather(props.searchValueCity,props.searchValueCc);
    }

    return(
        <nav>
            <div style={{flex: 1}}>
                <input className="search-input" type='text' placeholder='city name' value={props.searchValueCity} onChange={event => {props.setSearchValueCity(event.target.value)}} onKeyPress={handleKeyPress}/>
                <input className="search-input-cc" type='text' placeholder='cc'value={props.searchValueCc} onChange={event => {props.setSearchValueCc(event.target.value)}} onKeyPress={handleKeyPress}/>
                <button className="search-btn" onClick={handleSearch}>
                    <i className="fa fa-search" />
                </button>

                <button className="temp-switch"
                onClick={handleUnit}>
                    <i
                        className="fa fa-thermometer-empty"
                        aria-hidden="true"
                        style={{paddingRight: 5 + 'px'}}
                    />
                    <sup>&deg;</sup> {props.unit}
                </button>
            </div>
        </nav>
    );
    
}
const mapStateToProps = state => {
    return {
        unit: state.nav.unit,
        searchValueCity: state.nav.searchValueCity,
        searchValueCc: state.nav.searchValueCc

    };
};

const mapDispatchToProps = dispatch => { //connect action and store
    return {
        updateUnit: () => dispatch(updateUnitAction()),
        setSearchValueCity: event => dispatch(setSearchValueCity(event)),
        setSearchValueCc: event => dispatch(setSearchValueCc(event)),
        loadWeather: (city,cc) => dispatch(loadWeather(city,cc))
        };
    };

export default connect(mapStateToProps,mapDispatchToProps) (Nav);
