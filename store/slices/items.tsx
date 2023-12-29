import { createSlice } from "@reduxjs/toolkit";
import fakeApiData from "../sagas/fakeApiData"


export type Category = "shirts"|"shoes"|"pants";
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
            //quick fix to bug of refetching data on navigation between items sometimes
            if(items.pants)return;
            // console.log("loading");
            items.loading = true;
        },
 
        apiCallSuccess:(items , action)=>{
            items.loading = false;
            items.shirts = action.payload["shirts"];
            items.shoes = action.payload["shoes"];
            items.pants = action.payload["pants"];
        },
        apiCallFailed:(items,action)=>{
            items.loading = false;
            console.log("error getting results" , action.payload);
        },
        fakeApiCallBegan:(items)=>{
            items.loading = true;
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