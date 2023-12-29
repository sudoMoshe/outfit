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
    pants?:OutfitItem,
    outfitReady:boolean
}
const initalState:Outfit={outfitReady:false ,shirts:undefined ,shoes:undefined , pants:undefined };

const slice = createSlice({
    name:"currentOutfit" ,
    initialState:initalState,
    reducers:{
        addItem:(outfit ,action)=>{
            const category:Category = action.payload.category;
            outfit[category] = action.payload.item;
            if(outfit.pants&&outfit.shirts&&outfit.shoes){
                outfit.outfitReady=true;
            }
        },
        resetAllItems:(outfit )=>{
            outfit.outfitReady=false;
            outfit.pants=undefined;
            outfit.shirts=undefined;
            outfit.shoes=undefined;
            
        },
        outfitNotReady:(outfit)=>{
            outfit.outfitReady=false;
        }
       
    }
});

export const {addItem ,resetAllItems,outfitNotReady}=slice.actions;
export default slice.reducer;