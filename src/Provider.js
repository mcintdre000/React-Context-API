import React, { Component } from 'react';

export const MyContext = React.createContext();

export default class Provider extends Component {
    state = {
        name: 'Drew',
        age: 100,
        cool: true
    }
    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                growAYearOlder: () => this.setState({
                    age: this.state.age + 1
                })
            }}>
            {this.props.children}
            </MyContext.Provider>
        )
    }
}