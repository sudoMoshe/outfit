import React from 'react';
import { View, StyleSheet, Text, ViewStyle } from 'react-native';

interface ItemDisplayProp{
color?:string,
itemName?:string,
brand?:string,
size?:string,
category?:string,
style?:ViewStyle
}
const ItemDisplay =({style,color , brand , itemName ,size, category}:ItemDisplayProp)=> {
return(    <View style={[{top:60 , height:"70%" , justifyContent:"center" , alignItems:"center" , flex:1 },style]}>

<Text style={{fontSize: 20,fontWeight: 'bold',paddingBottom:20}} >  {color}  {itemName} 
</Text>
<Text style={{fontSize: 20,fontWeight: 'bold',paddingBottom:20}} > 
 {brand} {size?"size "+size:""} {category}
</Text>
</View>)
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
}
});
export default ItemDisplay;