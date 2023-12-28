import React , {useEffect} from 'react';
import { View  , StyleSheet  , Text , Button , ActivityIndicator } from 'react-native';
import { Items  , Item} from '../../store/slices/items';
interface HomeScreenProp extends Items{
}
const HomeScreen =({loading , shoes , shirts , pants}:HomeScreenProp)=> {

  
return(<View style={styles.container}>
      <ActivityIndicator size="large"  animating={loading} />
      
<Text>home screen</Text>
<View>

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
</View>

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
export default HomeScreen;