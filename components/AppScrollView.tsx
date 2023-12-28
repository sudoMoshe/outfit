import React from 'react';
import { FlatList, ViewStyle  ,  } from 'react-native';
interface AppScrollViewProp{
children:JSX.Element[],
style:ViewStyle
}
const AppScrollView =({children , style}:AppScrollViewProp)=> {
return(<FlatList
      
    showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}
  style={[style , {}]} data={children} renderItem={({item})=>item}/>)
}

export default AppScrollView;