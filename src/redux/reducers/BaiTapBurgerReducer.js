import { TANG_GIAM_SO_LUONG } from "../constant/BaiTapBurgerConst";

const stateInit = {
  burger: {
    salad: 1,
    cheese: 1,
    beef: 1,
  },

  menu: {
    salad: 20,
    cheese: 15,
    beef: 30,
  },

  total: 65,
};

const BaiTapBurgerReducer = (state = stateInit, action) => {
  switch (action.type) {
    case TANG_GIAM_SO_LUONG: {
      let burgerUpdate = { ...state.burger };

      //tang giam số lượng cho burger
      for (const nameBurger in burgerUpdate) {
        if (nameBurger === action.propsBurger) {
          burgerUpdate[nameBurger] += action.amount;
        }
      }

      //Nếu amount = -1
      if (action.amount === -1 && state.burger[action.propsBurger] < 1) {
        return { ...state };
      }

      //setState burger
      state.burger = burgerUpdate;

      //Thành tiền
      state.total += action.amount * state.menu[action.propsBurger];
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapBurgerReducer;
