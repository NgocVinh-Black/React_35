import React, { Component } from "react";

export default class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-light ms-2 fs-3 fw-bold">Ghế đã đặt</span>
          <br />
          <button className="gheDangChon"></button>
          <span className="text-light ms-2 fs-3 fw-bold">Ghế đang chọn</span>
          <br />
          <button className="ghe mx-0"></button>
          <span className="text-light ms-2 fs-3 fw-bold">Ghế chưa đặt</span>
        </div>
        <div className="mt-4 me-5">
          <table className="table table-bordered">
            <thead>
              <tr className="text-center">
                <th
                  className="text-light fs-5"
                  style={{
                    background: "none",
                  }}
                  scope="col"
                >
                  Số ghế
                </th>
                <th
                  className="text-light fs-5"
                  style={{
                    background: "none",
                  }}
                  scope="col"
                >
                  Giá
                </th>
                <th
                  className="text-light fs-5"
                  style={{
                    background: "none",
                  }}
                  scope="col"
                >
                  Hủy
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <th
                className="text-warning fs-5"
                  style={{
                    background: "none",
                  }}
                  scope="col"
                >
                  Số ghế
                </th>
                <th
                className="text-warning fs-5"
                  style={{
                    background: "none",
                  }}
                  scope="col"
                >
                  Giá
                </th>
                <th
                className="text-danger fs-5"
                  style={{
                    background: "none",
                  }}
                  scope="col"
                >
                  Hủy
                </th>
              </tr>
              <tr className="text-center">
                <th
                className="text-warning fs-5"
                  style={{
                    background: "none",
                  }}
                  scope="col"
                >
                  Số ghế
                </th>
                <th
                className="text-warning fs-5"
                  style={{
                    background: "none",
                  }}
                  scope="col"
                >
                  Giá
                </th>
                <th
                className="text-danger fs-5"
                  style={{
                    background: "none",
                  }}
                  scope="col"
                >
                  Hủy
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
