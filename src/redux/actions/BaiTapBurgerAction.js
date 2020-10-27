import { TANG_GIAM_SO_LUONG } from "../constant/BaiTapBurgerConst"

export const tangGiamSoLuongBurgerAction = (propsBurger, amount) => {
    return {
        type : TANG_GIAM_SO_LUONG,
        propsBurger,
        amount,
    }
}