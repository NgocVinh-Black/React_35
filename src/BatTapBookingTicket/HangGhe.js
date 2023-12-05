import React, { Component } from "react";

export default class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disable = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }
      return (
        <button
          disabled={disable}
          className={`ghe ${cssGheDaDat} fw-bold mx-3`}
          key={index}
        >
          {index + 1}
        </button>
      );
    });
  };
  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className="rowNumber">{hang.soGhe}</button>;
    });
  };
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div
        className="text-light text-start mt-2 fw-bold fs-4"
        style={{
          marginLeft: 195,
        }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}
