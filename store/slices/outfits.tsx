import { createSlice } from '@reduxjs/toolkit';
import { Outfit } from './currentOutfit';

const initalState:Outfit[] = [];
const slice = createSlice({
    name:"outfits",
    initialState:initalState,
    reducers:{
        addOutfit:(outfits , action)=>{
            outfits.push(action.payload);
        }
    },
});

export const {addOutfit}=slice.actions;
export default slice.reducer;