import {  ScrollView, StyleSheet , Dimensions } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View   } from '../../components/Themed';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ItemPicker from '../../components/ItemPicker';
import Animated, {  BounceIn, BounceOut} from 'react-native-reanimated';
export default function TabPantsScreen() {
    const {height}= Dimensions.get("screen");
    const pants = useSelector((state:RootState)=>state.items.pants);
    // const pickerHeightPosition= useSharedValue(height);
    // const animatedStyles = useAnimatedStyle(() => ({
        
    //     transform: [{ translateY: pickerHeightPosition.value }],
    //   }));
  return (
    <View style={styles.container}>
        {/* <ScrollView style={{width:"100%"}}> */}

      {/* <Text style={styles.title}>pants</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
        {/* <Button title='test' onPress={()=>pickerHeightPosition.value = withSpring(0)}/> */}
      {/* <Animated.View entering={BounceIn} exiting={BounceOut}> */}
            <ItemPicker  items={pants}/>
      {/* </Animated.View> */}
        {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
