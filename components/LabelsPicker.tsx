import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, } from 'react-native';

interface LabelsPickerProp{
currentValue?:string,
title:string,
numColumns?:number,
labels:string[],

onSelect:(label:string)=>void
}
const LabelsPicker =({title , labels ,numColumns=2 ,currentValue,onSelect}:LabelsPickerProp)=> {
        const passiveColor ="#2f95dc";
        const activeColor = "#ccc";

return(<View style={styles.container}>
<Text style={styles.title}>there are {labels.length} {title} available</Text>
<FlatList
// style={{width:"100%"}}
nestedScrollEnabled
numColumns={numColumns}
// horizontal={true}
data={labels}
renderItem={({item , index})=>{
    const active = ( !currentValue||item !== currentValue);
    return(<Pressable onPress={()=>{onSelect(item)}}>
        <View style={{backgroundColor:active? activeColor:passiveColor  , padding:4 , margin:8 , justifyContent:"center" , borderRadius:20}}><Text style={styles.title} key={index}>{item}</Text></View>
        </Pressable>)
}}
/>
</View>)
}
const styles = StyleSheet.create({
    container: {
        marginTop:10,
    width:"100%",
   flex: 1,
   alignItems: 'center',
   },

title:{fontSize: 20,
    fontWeight: 'bold',
marginBottom:4}
});
export default LabelsPicker;