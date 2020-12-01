import React, { Component } from "react";
import Tentang from "./Tentang/Tentang";

class child2 extends Component {
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    componentWillUnmount() {
        alert('child Kedua will be gone :(')
    }
    render() {
        return (
            <div>
                <h3>Kelompok 34</h3>
                <Tentang/>
            </div>
        );
    }
}
export default child2;
