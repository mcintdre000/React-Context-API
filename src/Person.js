import React, { Component } from 'react';
import { MyContext } from './Provider';

// const MyContext = React.createContext();

export default class Person extends Component {
    render() {
        return (
            <div className="person">
                <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <p>Age: {context.state.age}</p>
                            <p>Name: {context.state.name}</p>
                            <button onClick={context.growAYearOlder}>Increment</button>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        );
    }
}