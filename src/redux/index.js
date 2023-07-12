import { configureStore } from "@reduxjs/toolkit";
import personalDetailsSlice from "./slices/personalDetailsSlice";

export default configureStore({
    reducer : {
        PersonalDetails : personalDetailsSlice
    }
})