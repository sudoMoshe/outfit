import React , {useEffect} from 'react';
import { View  , StyleSheet  , Text , Button , ActivityIndicator } from 'react-native';
import { Items  , Item} from '../../store/slices/items';
import { FontAwesome } from '@expo/vector-icons';
interface HomeTabProp {
    loading:boolean
}
const HomeTab =({loading }:HomeTabProp)=> {

  
return(<View style={styles.container}>
      <ActivityIndicator size="large"  animating={loading} />
      <View style={{  width:"100%",alignItems: 'center',
// justifyContent: 'center',
}}>

<Text style={{fontSize:30 , fontWeight:"600"  }}>Application</Text>
      </View>
<Text style={{fontSize:20 , fontWeight:"600"  , marginTop:20 , marginStart:10}}>Outfits {0}</Text>
<Text style={{fontSize:20 , fontWeight:"600"  , marginTop:20 , marginStart:10}}>current outfit status {"1/3"}</Text>

{/* <View>
{shirts.brands.map((b , i)=>{
    return <Text key={i}>{b}</Text>
})}
</View>
<View>

{shoes.brands.map((b , i)=>{
    return <Text key={i}>{b}</Text>
})}
</View>
<View>

{pants.brands.map((b , i)=>{
    return <Text key={i}>{b}</Text>
})}
</View> */}

</View>)
}
const styles = StyleSheet.create({
container: {
flex: 1,
width:"100%",
backgroundColor: '#fff',
// alignItems: 'center',
// justifyContent: 'center',
}
});
export default HomeTab;