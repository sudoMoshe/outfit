import React from 'react';
import { View, StyleSheet, Text, Pressable, ViewStyle } from 'react-native';
interface AppButtonProp{
title:string,
onPress:()=>void,
style?:ViewStyle,
textStyle?:ViewStyle,
}
const AppButton =({title ,style,textStyle, onPress}:AppButtonProp)=> {
return(
<View style={[styles.container,style]}>
<Pressable onPress={onPress}>

<Text style={[ styles.text,textStyle]}>{title}</Text>
</Pressable>
</View>
)
}
const styles = StyleSheet.create({
container: {
// flex: 1,
margin:10,
padding:6,
elevation: 20,
shadowColor: 'black',
borderRadius:30,
backgroundColor: '#ccc',
alignItems: 'center',
justifyContent: 'center',
},text:{
fontSize:20,
fontWeight:"bold"
}
});
export default AppButton;