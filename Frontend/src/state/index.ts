import {createSlice, PayloadAction} from "@reduxjs/toolkit"

//te genera interfas de otro tipo no solo el tipado "interface"
export interface InitialStateTypes{
    isSidebarCollapsed:boolean;
    isDarkMode:boolean;
}

const initialState:InitialStateTypes={
    isSidebarCollapsed:false,
    isDarkMode:false
};

//creando una nueva instancia un nuevo campo con "createSlice"
export const globaSlice = createSlice({
    name:"global",
    initialState,
    reducers:{
        setIsSidebarCollapsed:(state,action:PayloadAction<boolean>)=>{
            state.isSidebarCollapsed=action.payload;
        },
        setIsDarkMode:(state,action:PayloadAction<boolean>)=>{
            state.isDarkMode=action.payload;
        },
    },
});

export const {setIsSidebarCollapsed, setIsDarkMode}= globaSlice.actions;
export default globaSlice.reducer;