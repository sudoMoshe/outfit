import React , {useEffect} from 'react';
import { View  , StyleSheet  , Text , Button , ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { router } from 'expo-router';
interface HomeTabProp {
    loading:boolean
}
const HomeTab =({loading }:HomeTabProp)=> {
    const isCurrentOutfitReady = useSelector((state:RootState)=>state.currentOutfit.outfitReady);
    const pants = useSelector((state: RootState) => state.currentOutfit.pants);
    const shirt = useSelector((state: RootState) => state.currentOutfit.shirts);
    const shoes = useSelector((state: RootState) => state.currentOutfit.shoes);
    const outfitsCount = useSelector((state:RootState)=>state.outfits.length);
    const progress = (!!pants?1:0)+(!!shirt?1:0)+(!!shoes?1:0);


    useEffect(()=>{
        if(isCurrentOutfitReady) {
            router.replace("/modal");
        }
    },[isCurrentOutfitReady])
//   console.log("pants",pants);
if(loading) return (<View style={styles.container}>
    <ActivityIndicator size="large"  animating={loading} /></View>)
return(<View style={styles.container}>
   
      <View style={{  width:"100%",alignItems: 'center',
// justifyContent: 'center',
}}>

<Text style={{fontSize:30 , fontWeight:"600"  , top:10 }}>Application</Text>
      </View>
<Text style={{fontSize:20 , fontWeight:"600"  , marginTop:20 , marginStart:10}}>Outfits {outfitsCount}</Text>
<Text style={{fontSize:20 , fontWeight:"600"  , marginTop:20 , marginStart:10}}>current outfit status {progress}/3</Text>



</View>)
}
const styles = StyleSheet.create({
container: {
flex: 1,
width:"100%",
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
}
});
export default HomeTab;