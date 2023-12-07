import { DAT_GHE, HUY_GHE } from "./DatVeType";

const stateDefault = {
  danhSachGheDangDat: [],
};

const DatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        danhSachGheDangDatUpdate.push(action.ghe);
      }

      return { ...state, danhSachGheDangDat: danhSachGheDangDatUpdate };
    }

    case HUY_GHE: {
      let danhSachGheDangDatUpdate = state.danhSachGheDangDat.filter(
        (gheDangDat) => gheDangDat.soGhe !== action.soGhe
      );
      return { ...state, danhSachGheDangDat: danhSachGheDangDatUpdate };
    }
    default:
      return { ...state };
  }
};

export default DatVeReducer;
