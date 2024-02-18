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
import getProductsBySellerReducer from "./get_products_by_seller_reducer"
import getProductByIdReducer from "./get_product_by_id_reducer"
import removeProductReducer from "./remove_product_reducer"
import cartReducer from "./cart_reducer"
import getAllProductsReducer from "./get_products_reducer"
import getProductsByCategoryReducer from "./get_products_by_category_reducer"

const rootReducer = combineReducers({
    sendEmail:sendEmailReducer,
    userRegister:userRegisterReducer,
    userLogin:userLoginReducer,
    sellerRegister:sellerRegisterReducer,
    sellerLogin:sellerLoginReducer,
    verifyOtp:verifyOtpReducer,
    verifyOtpSeller:verifyOtpSellerReducer,
    addProduct:addProductReducer,
    editProduct:editProductReducer,
    getProductsByCategory:getProductsByCategoryReducer,
    getProductsBySeller:getProductsBySellerReducer,
    getProductById:getProductByIdReducer,
    getAllProducts:getAllProductsReducer,
    removeProduct:removeProductReducer,
    cart:cartReducer
})
export default rootReducer