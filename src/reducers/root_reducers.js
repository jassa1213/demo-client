import {combineReducers} from "redux"
import userRegisterReducer from "./user_register_reducer"
import sendEmailReducer from "./send_email_reducer"
import userLoginReducer from "./user_login_reducer"
import sellerRegisterReducer from "./seller_register_reducer"
import verifyOtpReducer from "./verify_otp_reducer"
import verifyOtpSellerReducer from "./verify_otp_seller_reducer"
import addProductReducer from "./add_product_reducer"
import sellerLoginReducer from "./seller_login_reducer"
import editProductReducer from "./edit_product_reducer"

const rootReducer = combineReducers({
    sendEmail:sendEmailReducer,
    userRegister:userRegisterReducer,
    userLogin:userLoginReducer,
    sellerRegister:sellerRegisterReducer,
    sellerLogin:sellerLoginReducer,
    verifyOtp:verifyOtpReducer,
    verifyOtpSeller:verifyOtpSellerReducer,
    addProduct:addProductReducer,
    editProduct:editProductReducer
})
export default rootReducer