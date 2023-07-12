import { configureStore } from "@reduxjs/toolkit";
import personalDetailsSlice from "./slices/personalDetailsSlice";
import summarySlice from "./slices/summarySlice";

export default configureStore({
    reducer : {
        PersonalDetails : personalDetailsSlice,
        Summary: summarySlice
    }
})