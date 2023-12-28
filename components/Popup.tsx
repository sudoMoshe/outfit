import React from 'react';
import { View  , StyleSheet  , Modal } from 'react-native';
interface PopupProp{
    visible:boolean,
children?:JSX.Element|JSX.Element[];
}
const Popup =({visible, children}:PopupProp)=> {
return(
    <Modal animationType='slide' style={{ width:"100%" , height:"100%"}} visible={visible}  transparent={true}>
        <View style={{justifyContent:"center" , alignItems:"center" , flex:1 }}>

     <View style={{justifyContent:"center" , alignItems:"center", backgroundColor:"white",borderColor:"black",borderWidth:3,  height:"60%" , width:"80%"}}>

     {children}
     </View>

     
        </View>
        </Modal>

    )
}
// const styles = StyleSheet.create({
// container: {
// flex: 1,
// backgroundColor: '#fff',
// alignItems: 'center',
// justifyContent: 'center',
// }
// });
export default Popup;