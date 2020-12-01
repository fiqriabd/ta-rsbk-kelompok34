import React, { Component } from "react";
import Pemain from './Komponen/Pemain/Pemain';

class child1 extends Component {
    state = {
        nama: "Fiqri"
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    ubahNama = () => {
        this.setState((state) => { 
            if (state.nama === "Fiqri") {
                return {nama : "Sirajuddin Far"}
            } else {
                return { nama: "Fiqri"}                 
            }
        })
    }

    componentWillUnmount() {
        alert('child Pertama will be gone :(')
    }
    render() {
        return (
            <div>
                <h4>Database Pemain</h4>
                <button onClick={this.ubahNama}>Ubah nama!</button>
                <br />
                <h4>{this.state.nama}</h4>
            </div>
        );
    }
}
export default child1;