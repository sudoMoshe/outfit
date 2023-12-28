import { createSlice } from "@reduxjs/toolkit";
import fakeApiData from "../sagas/fakeApiData"
export interface Item{
    sizes:string[]|number[],
    colors:string[],
    brands:string[],
    items:string[]
}

const emptyItem ={
    sizes:[],
    colors:[],
    brands:[],
    items:[]
} 
export interface Items{
    loading: boolean,
     shirts:Item 
     ,pants:Item,
     shoes:Item
}

const initailState:Items ={
    loading:false , shirts:emptyItem ,pants:emptyItem,shoes:emptyItem
}

const slice = createSlice({
    name:"items",
    initialState:initailState,
    reducers:{
        apiCallBegan:(items)=>{
            // console.log("loading");
            items.loading = true;
        },
 
        apiCallSuccess:(items , action)=>{
            items.loading = false;
            items.shirts = action.payload["shirts"];
            items.shoes = action.payload["shoes"];
            items.pants = action.payload["pants"];
            // console.log("loading finished" , items);
        },
        apiCallFailed:(items,action)=>{
            items.loading = false;
            console.log("error getting results" , action.payload);
        },
        fakeApiCallBegan:(items)=>{
            items.loading = true;
        //   console.log("began fake api call");

        },
        fakeApiCallSuccess:(items)=>{
            items.loading = false;
            items.shirts = fakeApiData["shirts"];
            items.shoes = fakeApiData["shoes"];
            items.pants = fakeApiData["pants"];
            // console.log("loading finished (fake api)" , items);
        },
        }
});
export const {apiCallBegan , apiCallSuccess , apiCallFailed , fakeApiCallBegan ,fakeApiCallSuccess } =slice.actions;
export default slice.reducer;