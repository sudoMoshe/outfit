import React from 'react';
import { View, StyleSheet, Modal , Text } from 'react-native';
import {  Item } from '../store/slices/items';
import ColorsPicker from './ColorsPicker';
import LabelsPicker from './LabelsPicker';
import AppScrollView from './AppScrollView';
import { useState } from 'react';
import Popup from './Popup';
interface ItemPickerProp{
items:Item
}
const ItemPicker =({items}:ItemPickerProp)=> {
    const [showPopup , setShowPopup] = useState(false);
    const [brand , setBrand] = useState<string>();
    const [itemName , setItemName] = useState<string>();
    const [color , setColor] = useState<string>();

    const openPopup = (color:string)=>{
        setColor(color);
        setShowPopup(true);
    };
    const closePopup = (finishItemPicking:boolean)=>{
        setShowPopup(false);
        if(finishItemPicking){
            //TODO: handle saving the item in store and go back to main
        }

    };

 
return(
<AppScrollView  style={styles.container}>
    <LabelsPicker currentValue={brand} labels={items.brands} onSelect={setBrand} title="Brands"/>
    
    <LabelsPicker currentValue={itemName} labels={items.items} onSelect={setItemName} title="Items"/>
    
    <View style={styles.separator}/>
    
  

    
    <ColorsPicker onSelect={color=>openPopup(color)} colors={items.colors} display={!!brand&&!!itemName} />
 <Popup visible={showPopup}>
<Text style={{fontSize: 20,fontWeight: 'bold',paddingBottom:20}} >  {color} {itemName}  {brand}
</Text>
<Text style={{fontSize: 20,fontWeight: 'bold',}} > 
pleace select a size to proceed
    </Text>

    <LabelsPicker title="size" onSelect={size=>{console.log("item picked" ,size ); closePopup(false); } } labels={items.sizes} />
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