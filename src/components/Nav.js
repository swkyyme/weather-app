import React from 'react';
import { connect } from 'react-redux';
import { updateUnitAction, setSearchValueCity, setSearchValueCc } from '../redux/actions/navActions'; //{toggleUnit as toggleUnitAction}
import { loadWeather } from '../redux/actions/weatherActions';

class Nav extends React.Component {

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
			this.handleSearch();
		}
    }

    handleUnit=() => {
        this.props.updateUnit();
      }

    handleSearch = () => {
        this.props.loadWeather(this.props.searchValueCity,this.props.searchValueCc);
    }

    render() {
        return(
            <nav>
                <div style={{flex: 1}}>
                    <input className="search-input" type='text' value={this.props.searchValueCity} onChange={event => {this.props.setSearchValueCity(event.target.value)}} onKeyPress={this.handleKeyPress}/>
                    <input className="search-input-cc" type='text' value={this.props.searchValueCc} onChange={event => {this.props.setSearchValueCc(event.target.value)}} onKeyPress={this.handleKeyPress}/>
                    <button className="search-btn" onClick={this.handleSearch}>
                        <i className="fa fa-search" />
                    </button>

                    <button className="temp-switch"
                    onClick={this.handleUnit}>
                        <i
                            className="fa fa-thermometer-empty"
                            aria-hidden="true"
                            style={{paddingRight: 5 + 'px'}}
                        />
                        <sup>&deg;</sup> {this.props.unit}
                    </button>
                </div>
            </nav>
        );
    }

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
