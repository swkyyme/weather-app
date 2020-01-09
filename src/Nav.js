import React from 'react';

class Nav extends React.Component {

    render() {
        return(
            <nav>
                <div style={{flex: 1}}>
                    <input className="search-input" />
                    <button className="search-btn">
                        <i className="fa fa-search" />
                    </button>

                    <button className="temp-switch">
                        <i
                            className="fa fa-thermometer-empty"
                            aria-hidden="true"
                            style={{paddingRight: 5 + 'px'}}
                        />
                        <sup>&deg;</sup>C
                    </button>
                </div>
            </nav>
        );
    }

}

export default Nav;