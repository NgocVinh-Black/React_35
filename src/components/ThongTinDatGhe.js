import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/DatVeAction";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-light mx-2" style={{ fontSize: "28px" }}>
            Ghế đã đặt
          </span>
          <br />

          <button className="gheDangChon"></button>
          <span className="text-light mx-2" style={{ fontSize: "28px" }}>
            Ghế đang chọn
          </span>
          <br />

          <button className="ghe" style={{ marginLeft: 0 }}></button>
          <span className="text-light mx-2" style={{ fontSize: "28px" }}>
            Ghế chưa đặt
          </span>
        </div>

        <div className="mt-5 me-5">
          <table className="table table-bordered" border="2">
            <thead>
              <tr className="text-light fs-4">
                <th
                  className="text-light"
                  style={{
                    background: "none",
                  }}
                >
                  Số ghế
                </th>
                <th
                  className="text-light"
                  style={{
                    background: "none",
                  }}
                >
                  Giá
                </th>
                <th
                  className="text-light"
                  style={{
                    background: "none",
                  }}
                >
                  Hủy
                </th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td
                      className="text-warning fw-bold fs-5"
                      style={{
                        background: "none",
                      }}
                    >
                      {gheDangDat.soGhe}
                    </td>
                    <td
                      className="text-warning fw-bold fs-5"
                      style={{
                        background: "none",
                      }}
                    >
                      {gheDangDat.gia.toLocaleString()}
                    </td>
                    <td
                      style={{
                        background: "none",
                      }}
                    >
                      <button
                        style={{
                          border: "none",
                          background: "none",
                          color: "red",
                        }}
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          class="bi bi-x-lg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="text-warning">
              <tr>
                <td
                  colspan="2"
                  className="fs-5 text-white fw-bold border-start-0"
                  style={{
                    background: "none",
                  }}
                >
                  Tổng tiền
                </td>
                <td
                  className="fs-5 text-warning fw-bold border-start-0"
                  style={{
                    background: "none",
                  }}
                >
                  {this.props.danhSachGheDangDat.reduce(
                    (tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    },
                    0
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.DatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
