import React from 'react';
import Condition from './Condition';
import Forecast from './Forecast';

class Main extends React.Component {
    render(){
        return (
            <main>
                <Condition />
                <Forecast />
            </main>
        );
    }
}

export default Main;