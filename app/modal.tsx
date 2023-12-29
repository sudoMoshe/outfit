import { StatusBar } from 'expo-status-bar';
import { Image, Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View  } from '../components/Themed';
import { Outfit, OutfitItem, outfitNotReady } from '../store/slices/currentOutfit';
import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';
import { useImages } from '../contexts/ImagesContext';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ItemDisplay from '../components/ItemDisplay';
import { Item, Category } from '../store/slices/items';
import { router } from 'expo-router';
import { useAppDispatch } from '../store/hooks';



// const images = [
//   require("../assets/images/group-of-smiling-businesspeople-showing-thumbs-up-celebrating-shared-business-success-happy-work-team-cheering-enjoy-good-job-results-illustration-teamwork-vector.jpg"),
//   // require("../assets/images/medium-shot-colleagues-celebrating_23-2149008991.avif"),
//   require("../assets/images/images.jpeg")
// ]


function getRandomImageIndex(max:number) {
  return Math.floor(Math.random() * max);
}


const DisplayItem = ({item,category}:{item?:OutfitItem , category:Category})=>{
  if(!item)return;
  return(<ItemDisplay style={{top:-40 , borderColor:"black" , borderWidth:1}} {...item} itemName={item.name} category={category} /> )
}


export default function ModalScreen() {
  const images = useImages();
  const dispatch = useAppDispatch()
  const close = ()=>{
    dispatch( outfitNotReady());
    router.replace("/_HomeTab");
  }


  const pants = useSelector((state: RootState) => state.currentOutfit.pants);
  const shirt = useSelector((state: RootState) => state.currentOutfit.shirts);
  const shoes = useSelector((state: RootState) => state.currentOutfit.shoes);
  return (
    <View style={styles.container}>
  <View style={{height:"40%"}}>

      <DisplayItem item={pants}category="pants" />
      <DisplayItem item={shirt} category="shirts"/>
      <DisplayItem  item={shoes} category="shoes" />
  </View>
<Image style={{width:250 , height:250}} source={images[getRandomImageIndex(images.length)]} />
<View style={{justifyContent:"center"}}>
<AppButton title='choose another outfit' onPress={()=>{
//TODO save outfit
close();
}} />
<AppButton title='cancel' onPress={()=>{close();}} />

</View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    // marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button:{
    backgroundColor:"black"
  }
});
