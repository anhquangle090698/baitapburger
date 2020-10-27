import { combineReducers } from "redux";
import BaiTapBurgerReducer from "./BaiTapBurgerReducer";

export const rootReducer = combineReducers({
  StateBaiTapBurgerReducer: BaiTapBurgerReducer,
});