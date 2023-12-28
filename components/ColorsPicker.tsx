import React from 'react';
import { View, StyleSheet, FlatList, ViewStyle  , Text , Pressable} from 'react-native';
interface ColorsPickerProp{
style?:ViewStyle,
colors:string[],
display:boolean,
onSelect:(color:string)=>void,
}
const ColorsPicker =({colors  , display ,onSelect}:ColorsPickerProp)=> {
    if(!display) return;
return(

    <>

<View style={{width:"100%" , justifyContent:"center" , flexDirection:"row"}}>
        <Text style={styles.title}>there are {colors.length} colors available</Text>
    </View>


<View style={styles.colorsContainer}>


    <FlatList nestedScrollEnabled numColumns={5} data={colors} renderItem={
        ({item:color , index} )=>{
            const colorName = color.toLocaleLowerCase();
            return<Pressable onPress={()=>onSelect(color)}><View key={index} style={[styles.colorItem , {backgroundColor:colorName}]}/></Pressable>
        }
        
    } />
    </View>
    </>
)
}
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    
      },
    colorItem:{margin:10, width:50 , height:50 , borderRadius:60  , borderBlockColor:"black" , borderWidth:3},
colorsContainer: 
    {flex:1 , justifyContent:"center" , flexDirection:"row" ,overflow:"hidden"  , padding:10 }

});
export default ColorsPicker;