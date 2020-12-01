import React, { Component } from "react";
import Pemain from './Pemain/Pemain';

class child1 extends Component {
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    componentWillUnmount() {
        alert('child Pertama will be gone :(')
    }
    render() {
        return (
            <div>
                <h4>Database Pemain</h4>
                <Pemain/>
            </div>
        );
    }
}
export default child1;