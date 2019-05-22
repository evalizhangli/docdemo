import React from 'react';
import { RedocStandalone } from 'redoc';


class Redoc extends React.Component{
    render() {
        return(
            <RedocStandalone
                specUrl="https://raw.githubusercontent.com/evalizhangli/API-GW-Theme/master/src/evainfo.json"
                onLoaded={error => {
                    if (!error) {
                        console.log('Yay!');
                    }
                }}
            />
        );
    }
}

export default Redoc;
