import React, { Component } from "react";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index} >
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };
  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url(./image/bgmovie.jpg)",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <div className="row">
            <div className="col-8 text-center">
              <h1 className="text-warning display-4 fw-bold mt-3">
                ĐẶT VÉ XEM PHIM
              </h1>
              <h2 className="text-light fs-2">Màn hình</h2>
              <div
                className="mt-2"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <div className="screen"></div>
              </div>
              {this.renderHangGhe()}
            </div>
            <div className="col-4">
              <h2 className="mt-5 text-light fs-1 fw-bold">
                DANH SÁCH GHẾ BẠN CHỌN
              </h2>
              <ThongTinDatGhe />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
