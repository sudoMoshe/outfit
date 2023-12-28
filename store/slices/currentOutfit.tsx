import { createSlice } from '@reduxjs/toolkit';
import { Category } from './items';

export interface OutfitItem{
    size:string,
    name:string,
    brand:string,
    color:string
}
export interface Outfit{
    shirts?:OutfitItem,
    shoes?:OutfitItem,
    pants?:OutfitItem
}
const initalState:Outfit={};

const slice = createSlice({
    name:"currentOutfit" ,
    initialState:initalState,
    reducers:{
        addItem:(outfit ,action)=>{
            const category:Category = action.payload.category;
            outfit[category] = action.payload.item;
        },
       
    }
});

export const {addItem}=slice.actions;
export default slice.reducer;