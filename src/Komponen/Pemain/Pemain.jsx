import React, { Component } from "react";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";
export default class pemain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pemain: [],
      visible: false,
      nama: "",
      tim: "",
      kebangsaan: "",
      url : "https://database-pemain-bola.herokuapp.com/"
    };
  }
 
  handleButton = (nama) => {
    alert(nama);
  };
  handleTambahPemain = () => {
    this.setState({
      visible: true,
    });
  };
  handleNama = (e) => {
    this.setState({
      nama: e.target.value,
    });
    console.log(this.state.nama);
  };
  handleTim = (e) => {
    this.setState({
      tim: e.target.value,
    });
    console.log(this.state.tim);
  };
  handleKebangsaan = (e) => {
    this.setState({
      kebangsaan: e.target.value,
    });
    console.log(this.state.asal);
  };
  handleSubmit = () => {
    if (
      this.state.nama !== "" &&
      this.state.tim !== "" &&
      !this.state.kebangsaan !== ""
    ) {
      axios({
        method: "post",
        url:  this.state.url + "add",
        headers: {
          accept: "*/*",
        },
        data: {
          nama: this.state.nama,
          tim: this.state.tim,
          kebangsaan: this.state.kebangsaan,
        },
      })
        .then((data) => {
          alert("berhasil menambahkan");
          window.location.reload();
        })
        .catch((error) => {
          alert("gagal menambahkan");
        });
    } else {
      alert("pastikan semua kolom terisi");
    }
  };
  componentDidMount() {
    axios({
      method: "get",
      url: this.state.url + "all",
      headers: {
        accept: "*/*",
      },
    })
  }
 
  render() {
    return (
      <div>
          <Modal
            title="Tambah Pemain"
            centered
            visible={this.state.visible}
            onOk={this.handleSubmit}
            onCancel={() => this.setState({ visible: false })}
            width={500}
          >
            <div style={{ textAlign: "center" }}>
              <p>Nama : </p>{" "}
              <input
 
                type="text"
                placeholder="nama"
                onChange={this.handleNama}
              />
              <br />
              <p>Tim : </p>{" "}
              <input type="text" placeholder="tim" onChange={this.handleTim} />
              <br />
              <p>Kebangsaan : </p>{" "}
              <input
                type="text"
                placeholder="kebangsaan"
                onChange={this.handleKebangsaan}
              />
              <br />
            </div>
          </Modal>
 
          {this.state.pemain.map((results, index) => {
            return (
              <div className="card" key={results._id}>
                <div className="card-body">
                  <h5 className="card-title">Nama : {results.nama}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Tim : {results.tim}
                  </h6>
                  <p className="card-text">Kebangsaan : {results.kebangsaan}</p>
                </div>
                <button
                style={{backgroundColor:'red'}}
                  className="button"
                  onClick={() => this.handleButton(results.tim)}
                >
                  {" "}
                  klik saya
                </button>
              </div>
            );
          })}
        </div>
    );
  }
}
 