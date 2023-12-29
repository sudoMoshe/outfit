import React from 'react';
import { View, StyleSheet, Modal , Text, Pressable } from 'react-native';
import { Category, Item } from '../store/slices/items';
import ColorsPicker from './ColorsPicker';
import LabelsPicker from './LabelsPicker';
import AppScrollView from './AppScrollView';
import { useState, useEffect } from 'react';
import Popup from './Popup';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { addItem } from '../store/slices/currentOutfit';
import { useAppDispatch } from '../store/hooks';
import ItemDisplay from './ItemDisplay';

interface ItemPickerProp{
    category:Category,
    items:Item,
    numColumns?:number,
}
const ItemPicker =({items , category,numColumns}:ItemPickerProp)=> {
    const [showPopup , setShowPopup] = useState(false);
    const [brand , setBrand] = useState<string>();
    const [itemName , setItemName] = useState<string>();
    const [color , setColor] = useState<string>();

    const navigation = useNavigation();

    useEffect(()=>{
        navigation.addListener("focus" ,()=>{
            // console.log("should reset states here");
            setBrand(undefined);
            setItemName(undefined);
        })
    },[])
    const dispatch = useAppDispatch();

    const openPopup = (color:string)=>{
        setColor(color);
        setShowPopup(true);
    };
    const closePopup = (size?:string)=>{
        setShowPopup(false);
        if(size){
            //TODO: handle saving the item in store and go back to main

            
            dispatch(addItem({
category,
                item:{
                size:size,
    name:itemName,
    brand:brand,
    color:color}
            }))
            navigation.goBack();
        }

    };

 
return(
<AppScrollView  style={styles.container}>
    <LabelsPicker currentValue={brand} labels={items.brands} onSelect={setBrand} title="Brands"/>
    
    <LabelsPicker currentValue={itemName} labels={items.items} onSelect={setItemName} title="Items"/>
    
    <View style={styles.separator}/>
    
  

    
    <ColorsPicker onSelect={color=>openPopup(color)} colors={items.colors} display={!!brand&&!!itemName} />
 <Popup visible={showPopup}>
    <View style={{position:"absolute" , top:0 , left:0}}>
    <Pressable onPress={()=>{closePopup()}}>


 <Ionicons name="close-circle-outline" size={40} color="black"  />
    </Pressable>
    </View>
    <View style={{top:-40, height:"70%" , justifyContent:"center" , alignItems:"center" , flex:1 }}>

<ItemDisplay category={category} brand={brand} itemName={itemName}  color={color}/>
<Text style={{fontSize: 20,fontWeight: 'bold',}} > 
pleace select the size to proceed
    </Text>

    <LabelsPicker numColumns={numColumns} title="size" onSelect={size=>{ closePopup(size); } } labels={items.sizes} />
    </View>
 </Popup>

</AppScrollView>
)
}
const styles = StyleSheet.create({
container: {    
    width:"100%",
    flex: 1,
    backgroundColor: '#fff',
}
,
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});


export default ItemPicker;