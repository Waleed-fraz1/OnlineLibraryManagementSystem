import {createSlice} from "@reduxjs/toolkit";
const popupSlice = createSlice({
    name:"popup",
    initialState:{
        settingPopeup:false,
        addBookPopeup:false,
        readBookPopeup:false,
        recordBookPopeup:false,
        rerurnBookPopeup:false,
        addNewAdminPopeup:false,
       
    },
    reducer:{
       toggleSettingPop(state){
        state.settingPopup=!state.settingPopup;
       },
       toggleAddBookPopup(state){
        state.addBookPopup=!state.addBookPopup;
       },
       toggleReadBookPopup(state){
        state.readBookPopup=!state.readBookPopup;
       },
       toggleRecordBookPopup(state){
        state.recordBookPopup=!state.recordBookPopup;
       },
       toggleAddNewAdminPopup(state){
        state.addNewAdminPopup=!state.addNewAdminPopup;
       },
       toggleReturnBookPopup(state){
        state.retrunBookPopup=!state.retrunBookPopup;
       },
       closeAllPopup(state){
        state.addBookPopup=false;
        state.addNewAdminPopup=false;
        state.readBookPopup=false;
        state.recordBookPopeup=false;
        state.retrunBookPopup=false;
        state.settingPopup=false;
       },
    },
});
export const{
    closeAllPopup,toggleAddBookPopup,toggleAddNewAdminPopup,toggleReadBookPopup,toggleSettingPop,toggleReturnBookPopup,
    toggleRecordBookPopup
} = popupSlice.actions;
export default popupSlice.reducer;